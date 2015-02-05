'use strict';

angular.module('mean.attendance').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('requests example page', {
            url: '/request/example',
            templateUrl: 'attendance/views/request.html'
        });
    }
]);
