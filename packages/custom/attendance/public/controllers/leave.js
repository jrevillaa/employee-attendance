'use strict';

/* jshint -W098 */
angular.module('mean.attendance').controller('LeaveController', ['$scope', 'Global', 'Leave',
    function($scope, Global, Leave) {
        $scope.global = Global;
        $scope.package = {
            name: 'leave'
        };

        $scope.find = function() {
            Leave.query(function(leaves) {
                $scope.leaves = leaves;
                console.log(leaves);
            });
        };
    }
]);