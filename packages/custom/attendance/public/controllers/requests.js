'use strict';

/* jshint -W098 */
angular.module('mean.attendance').controller('RequestController', ['$scope', 'Global', 'Requests',
    function($scope, Global, Requests) {
        $scope.global = Global;
        $scope.package = {
            name: 'requests'
        };

        $scope.find = function() {
            Requests.query(function(requests) {
                $scope.requests = requests;
                console.log(requests);
            });
        };
    }
]);