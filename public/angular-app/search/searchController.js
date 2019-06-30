app.controller('searchController', searchController);

function searchController($route, $routeParams, dataFactory) {
    var vm = this;
    var val = $routeParams.str;

    vm.title = 'Home';

    dataFactory.search(val).then(function (response) {
        console.log(response);
        vm.posts = response[0];
    });

}