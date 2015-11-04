var mainApp = angular.module()

mainApp.config(){
    .when('/', {
        templateUrl : 'home.html',
    })

    // route for the about page
    .when('/about', {
        templateUrl : 'about.html',
    })

    // route for the sanitation page
    .when('/sanitation', {
        templateUrl : 'sanitation.html',
    })

    // route for the contact page
    .when('/contact', {
        templateUrl : 'contact.html',
    });
});


}
    