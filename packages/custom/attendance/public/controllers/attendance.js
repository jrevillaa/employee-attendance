'use strict';

/* jshint -W098 */
angular.module('mean.attendance').controller('AttendanceController', ['$scope', 'Global', 'Attendance', '$rootScope', '$stateParams',
    function($scope, Global, Attendance,$rootScope,$stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'attendance'
        };

        $scope.timeIn = function(){
            var attendance = new Attendance();
            attendance.$save(function(response){
                console.log(response);
            },function(error){
                console.log(error);
            });
        };

        $scope.timeIn = 'Thu Jan 08 2015 10:00:00 GMT+0530 (IST)';
        $scope.timeOut = 'Thu Jan 08 2015 19:00:00 GMT+0530 (IST)';
        $scope.hstep = 1;
        $scope.mstep = 15;
        $scope.ismeridian = true;

        $scope.update = function() {
            var attendance = new Attendance({
                timein:this.timeIn,
                timeout:this.timeOut,
                task:'Test'
            });
            console.log(attendance);
           /* attendance.$update(function() {
                $location.path('user/' + $scope.global.user._id + '/created/' + Date.now());
            });*/
            attendance.$update({
                attendanceId: '54af5df13fb6be800eca9e8b',
                userId: $scope.global.user._id,
                created: Date.now()
            },function(response){
                console.log(response);
            },function(error){
                console.log(error);
            });
        };

        $rootScope.$on('loggedin', function () {
            $scope.global = {
                authenticated: !!$rootScope.user,
                user: $rootScope.user
            };
        });

        $scope.find = function() {
            Attendance.query(function(attendance) {
                $scope.attendance = attendance;
                console.log('Attendance --- ', $scope.attendance);
            });
        };

        $scope.findOne = function() {
            Attendance.get({
                attendanceId: '54af5df13fb6be800eca9e8b'
            }, function(attendance) {
                $scope.attendance = attendance;
            });
            console.log('Attendance One -- ',$scope.attendance);
        };
        $scope.findOne();
    }
]);
