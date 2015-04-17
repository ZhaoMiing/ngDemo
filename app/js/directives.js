'use strict';

/* Directives */
angular.module('phonecat.directives', []).
    directive('mySummer', function() {
        return {
            template : '<p>Happy Summer Days! Hello </p>'
        };
    });