'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

function LaunchDog(clientId) {
    this.clientId = clientId;
    this.count = 0;
}
// filter service 使用factory返回一个函数
phonecatServices.
    factory('Phone', ['$resource',
        function ($resource) {
            return $resource('phones/:phoneId.json', {}, {
                query: {
                    method: 'GET',
                    params: {phoneId: 'phones'},
                    isArray: true
                }
            });
        }]).
    factory('notify', function () {
        return function (str) {
            console && console.log(str);
        }
    }).
    factory('userId', function () {
       return 'user1234';
    }).
    value('clientId', 'abacd1234').
    service('launchDog', ['clientId', LaunchDog]);
