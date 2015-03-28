var app = angular.module('CarisFactories', []);
app.factory('Instagram', ['$http',
    function($http) {
        return {
            'get': function() {
                var request = '/selectedPhotos';
                return $http.get(request);
            },
            'getAll': function() {
                var request = '/taggedPhotos';
                return $http.get(request);
            },
            'toggle': function(slide) {
                var request = '/taggedPhotos/'+slide.id;
                return $http.put(request, {show: !slide.show});
            }
        };
    }
]);

app.factory('GroupItems', [
    function() {
        return {
            'new': function(data,itemsPerGroup) {
                var i; var j = []; var res = [];

                if(data.length <= itemsPerGroup){
                    res.push(data);
                }else{
                    for (i = 0; i < data.length; i += 1) {
                        if(j.length == itemsPerGroup ){ res.push(j); j = []; }
                        j.push(data[i]);
                    }
                    res.push(j);
                }

                return res;
            }
        };
    }
]);

app.factory('Carousel', ['Instagram', 'GroupItems',
    function(Instagram, GroupItems) {
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
                    carousel.slidesGroups = GroupItems.new(res, carousel.slidesPerGroup);
                });

                return carousel;
            }
        };
    }
]);
