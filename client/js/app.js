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
        })
        .state('trip', {
            url: "/viaje",
            templateUrl: "views/trip.html",
            controller: "tripCtrl"
        })
        .state('trip.overview', {
            url: "/resumen",
            templateUrl: "views/trip/overview.html"
        })
        .state('trip.singapore', {
            url: "/singapur",
            templateUrl: "views/trip/singapore.html"
        })
        .state('trip.bali', {
            url: "/bali",
            templateUrl: "views/trip/bali.html"
        })
        .state('trip.cameron', {
            url: "/cameron_highlands",
            templateUrl: "views/trip/cameron.html"
        })
        .state('trip.penang', {
            url: "/penang",
            templateUrl: "views/trip/penang.html"
        })
        .state('trip.perhentian', {
            url: "/perhentian",
            templateUrl: "views/trip/perhentian.html"
        })
        .state('trip.kuala', {
            url: "/kuala_lumpur",
            templateUrl: "views/trip/kuala.html"
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


app.controller('photosCtrl',[ '$scope', 'Carousel', function($scope,Carousel){
    var width = window.innerWidth;
    var displayMode;
    if(width >= 750 && width < 1024) displayMode = 'tablet';
    else if(width < 750) displayMode = 'mobile';
    else displayMode = 'desktop';

    $scope.carousel = Carousel.create(displayMode);
}]);

app.controller('tripCtrl',[ '$scope', '$state', function($scope, $state){

    $scope.goToPrevStage = function(){
        $state.go($scope.prevStage);
    };

    $scope.goToNextStage = function(){
        $state.go($scope.nextStage);
    };

    $scope.initStagesContext = function(){
        var context = getStagesContext();
        console.log(context);
        $scope.prevStage = context.prev;
        $scope.nextStage = context.next;
        $scope.showPrev = !(context.prev == null);
        $scope.showNext = !(context.next == null);
    };


    $scope.$on('$stateChangeSuccess', function(){
        if($state.current.name == 'trip'){$state.go('trip.overview');}
        else $scope.initStagesContext();
    });

        function getStagesContext(){
        switch($state.current.name) {
            case 'trip.overview':
                return { prev: null, next: 'trip.singapore'};
            case 'trip.singapore':
                return { prev: 'trip.overview', next: 'trip.bali'};
            case 'trip.bali':
                return { prev: 'trip.singapore', next: 'trip.cameron'};
            case 'trip.cameron':
                return { prev: 'trip.bali', next: 'trip.penang'};
            case 'trip.penang':
                return { prev: 'trip.cameron', next: 'trip.perhentian'};
            case 'trip.perhentian':
                return { prev: 'trip.penang', next: 'trip.kuala'};
            case 'trip.kuala':
                return { prev: 'trip.perhentian', next: null};
            default:
                return null;
        }
    }

}]);
