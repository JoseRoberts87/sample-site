app.controller('aboutController', aboutController);

function aboutController(dataFactory) {

    var vm = this;
    vm.title = 'About';

    // dataFactory.about().then(function (response) {
    //     vm.about = response[0];
    // })
}