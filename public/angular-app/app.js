var app = angular.module('homeApp', ['ngRoute']).config(config);

function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: '/angular-app/home/home.html',
            controller: homeController,
            controllerAs: 'vm'
        })
        // .when('/contact', {
        //     templateUrl: '/angular-app/contact/contact.html',
        //     controller: contactController,
        //     controllerAs: 'vm'
        // })
        // .when('/about', {
        //     templateUrl: '/angular-app/about/about.html',
        //     controller: aboutController,
        //     controllerAs: 'vm'
        // })
        // .when('/services', {
        //     templateUrl: '/angular-app/services/services.html',
        //     controller: servicesController,
        //     controllerAs: 'vm'
        // })
        // .when('/:str', {
        //     templateUrl: '/angular-app/home/home.html',
        //     controller: searchController,
        //     controllerAs: 'vm'
        // })
        .otherwise({
            redirectTo: '/'
        })
}