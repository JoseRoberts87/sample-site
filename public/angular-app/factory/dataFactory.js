app.factory('dataFactory', dataFactory);

var headers = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin,X-Requested-With, Content-Type,Accept, Authorization, X-Custom-Header',
        'Access-Control-Allow-Credentials': 'true'
    }
};

function dataFactory($http, $location) {

    var root;
    if ($location.host() == "localhost") {
        root = 'http://localhost:5000/';
    } else {
        root = '/';
    }

    return {
        posts: posts,
        categories: categories,
        about: about,
        blogPost: blogPost,
        comments: comments,
        services: services,
        search: search,
        login: login,
        register: register,
        entry: entry
    };

    function posts() {
        return $http.get(root + 'blog', headers).then(complete).catch(failed);
    }

    function categories() {
        return $http.get(root + 'categories', headers).then(complete).catch(failed);
    }

    function about() {
        return $http.get(root + 'about', headers).then(complete).catch(failed);
    }

    function blogPost(id) {
        return $http.get(root + 'blog/' + id, headers).then(complete).catch(failed);
    }

    function comments(id) {
        return $http.get(root + 'blog/' + id + '/comments', headers).then(complete).catch(failed)
    }

    function comment(id, co_id) {
        return $http.get(root + 'blog/' + id + '/comments/' + co_id, headers).then(complete).catch(failed)
    }

    function search(val) {
        return $http.get(root + 'search/' + val, headers).then(complete).catch(failed)
    }


    function services() {
        return $http.get(root + 'services', headers).then(complete).catch(failed);
    }

    function login() {
        return $http.get(root + 'login', headers).then(complete).catch(failed);
    }

    function register() {
        return $http.get(root + 'register', headers).then(complete).catch(failed);
    }

    function entry(data, endpoint) {
        return $http.post(root + endpoint, data, headers).then(complete).catch(failed);
    }

    function complete(response) {
        // console.log(response);
        return response.data;
    }

    function failed(error) {
        // console.log(error);
        return error;
    }
}