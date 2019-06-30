app.controller('contactController', contactController);

function contactController(dataFactory) {

    var vm = this;
    vm.title = 'Contact';

    dataFactory.posts().then(function (response) {
        console.log(response);
        vm.posts = response[0];

    })

}