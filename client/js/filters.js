angular.module('captionFilters', [])
    .filter('removeTags', function() {
        return function(input) {
            input = input || '';
            return input.replace( /(\#.+)/, '' );
        };
    })
    .filter('join', function() {
        return function(tags) {
            return tags.join(', ');
        };
    });

