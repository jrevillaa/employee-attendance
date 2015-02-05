'use strict';

angular.module('mean.attendance').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('leave example page', {
            url: '/leave/example',
            templateUrl: 'attendance/views/leave.html'
        });
    }
]);
