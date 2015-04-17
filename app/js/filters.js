'use strict';

/* Filters */

// filter service 使用factory返回一个函数
angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
