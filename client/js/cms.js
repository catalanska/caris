'use strict';

var app = angular.module('CarisCms', ['ui.bootstrap', 'CarisFactories', 'captionFilters']);


app.controller('cmsCtrl',[ '$rootScope','$scope', 'Instagram', 'GroupItems', function($rootScope,$scope,Instagram,GroupItems){
    console.log('in controller');
    $scope.photos = [];

    Instagram.getAll().success(function(res) {
        $scope.photos = GroupItems.new(res, 4);
    });

}]);

app.controller('photoCtrl',[ '$scope', 'Instagram', function($scope,Instagram){

    $scope.toggleShow = function(){
        Instagram.toggle($scope.slide).success(function() {
            $scope.slide.show = !$scope.slide.show;
        });
    };

}]);



