
var myApp = angular.module('myApp', ['ngView', 'routeProvider', 'locationProvider']);

myApp.config(['routeProvider', 'locationProvider', 
    function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html'
        })
        // route for the about page
        .when('about', 
        {
            templateUrl: 'views/about.html',
        })
        // route for the sanitation page
        .when('/sanitation', 
        {
            templateUrl: 'views/sanitation.html',
        })
        // route for the contact page
        .when('/contact', 
        {
            templateUrl: 'views/contact.html',
        })

        .otherwise({
            redirectTo: '/views/home.html',
        });

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
}]);