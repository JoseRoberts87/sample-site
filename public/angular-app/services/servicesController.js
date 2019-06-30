app.controller('servicesController', servicesController);

function servicesController(dataFactory) {

    var vm = this;
    vm.title = 'Services';

    dataFactory.posts().then(function (response) {
        vm.services = response[0];
    })

}

