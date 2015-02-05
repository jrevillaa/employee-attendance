'use strict';

angular.module('mean.attendance').factory('Attendance', ['$resource',
    function($resource) {
        return $resource('attendance/:attendanceId/user/:userId/created/:created',
            {
                attendanceId: '@_id',
                userId: '@_id',
                created: '@_created'
            },
            {
                update: {
                    method: 'PUT'
                }
            });
    }
]);
