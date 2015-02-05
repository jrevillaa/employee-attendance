'use strict';

angular.module('mean.attendance').factory('Requests', ['$resource',
    function($resource) {
        return $resource('request/:requestId',
            {
                requestId: '@_id'
            },
            {
                update: {
                    method: 'PUT'
                }
            });
    }
]);
