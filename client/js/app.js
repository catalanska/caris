'use strict';

var app = angular.module('CarisApp', ['ui.router', 'ngTouch', 'ui.bootstrap', 'CarisFactories', 'CarisDirectives', 'templates-main']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/home.html"
        })
        .state('place', {
            url: "/como_llegar",
            templateUrl: "views/place.html"
        })
        .state('hotels', {
            url: "/donde_dormir",
            templateUrl: "views/hotels.html"
        })
        .state('photos', {
            url: "/fotos",
            templateUrl: "views/photos.html",
            controller: "photosCtrl"
        })
        .state('history', {
            url: "/historia",
            templateUrl: "views/history.html"
        });
}]);

app.run(['$rootScope', function($rootScope){

    $rootScope.$on('$stateChangeStart', function(){
        $rootScope.collapseNav();
    });

    $rootScope.collapseNav = function(){
        $rootScope.isNavCollapsed = true;
    };

}]);


app.controller('photosCtrl',[ '$rootScope','$scope', 'Carousel', function($rootScope,$scope,Carousel){
    var width = window.innerWidth;
    var displayMode;
    if(width >= 750 && width < 1024) displayMode = 'tablet';
    else if(width < 750) displayMode = 'mobile';
    else displayMode = 'desktop';

    $scope.carousel = Carousel.create(displayMode);
}]);
