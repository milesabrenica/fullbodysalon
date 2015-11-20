var myApp = angular.module('myApp', [
  'ngRoute'
]);

myApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/', {
            templateUrl: 'views/home.html'
            })
            // route for the sanitation page
            .when('/sanitation', {
                templateUrl: 'views/sanitation.html'
            })
            // route for the contact page
            .when('/contact', {
                templateUrl: 'views/contact.html'
            })
            .when('/about',{
                templateUrl: 'views/about.html'
            })
            .otherwise({
                redirectTo: '/'
            });

}]);