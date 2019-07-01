app.controller('homeController', homeController);

function homeController($scope, $location, $anchorScroll) {
    console.log('loaded')
    $scope.gotoBottom = function(section) {
        console.log(section)
        $location.hash(section);
        $anchorScroll();
    }

}