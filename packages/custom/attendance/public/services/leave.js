'use strict';

angular.module('mean.attendance').factory('Leave', ['$resource',
    function($resource) {
        return $resource('leave/:leaveId',
            {
                leaveId: '@_id'
            },
            {
                update: {
                    method: 'PUT'
                }
            });
    }
]);
