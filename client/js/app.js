'use strict';

var app = angular.module('ABC', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'templates-main', 'ngTouch']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/inicio");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/inicio",
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


app.factory('Carousel', ['Instagram',
    function(Instagram) {
        var groupSlides = function(data, slidesPerGroup){

            var i, first = [], second;

            for (i = 0; i < data.length; i += slidesPerGroup) {
                second = {
                    image1: data[i]
                };
                if (slidesPerGroup == 1) {}
                if (data[i + 1] && (slidesPerGroup == 2 || slidesPerGroup == 3)) {
                    second.image2 = data[i + 1];

                }
                if (data[i + (slidesPerGroup - 1)] && slidesPerGroup == 3) {
                    second.image3 = data[i + 2];
                }
                first.push(second);
            }
            return first;
        };

        return {
            'create': function(displayMode) {

                var carousel = {
                    interval: 7000,
                    hashtag: "wedding",
                    slidesGroups: []
                };

                switch(displayMode) {
                    case 'desktop':
                        carousel.width = "918px";
                        carousel.slidesPerGroup = 3;
                        break;
                    case 'tablet':
                        carousel.width = "612px";
                        carousel.slidesPerGroup = 2;
                        break;
                    default:
                        carousel.width = "303px";
                        carousel.slidesPerGroup = 1;
                }

                Instagram.get().success(function(res) {
                    carousel.slidesGroups = groupSlides(res, carousel.slidesPerGroup);
                });

                return carousel;
            }
        };

    }
]);

app.factory('Instagram', ['$http',
    function($http) {
        return {
            'get': function() {
                var request = '/api/taggedPhotos';
                return $http.get(request);
            }
        };
    }
]);

app.directive('disableNgAnimate', ['$animate', function($animate) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            $animate.enabled(false, element);
        }
    };
}]);


