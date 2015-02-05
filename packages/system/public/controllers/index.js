'use strict';

angular.module('mean.system').controller('IndexController', ['$rootScope', '$scope', 'Global',
    function ($rootScope, $scope, Global) {
        $scope.global = Global;

        $rootScope.$on('loggedin', function () {
            $scope.global = {
                authenticated: !!$rootScope.user,
                user: $rootScope.user
            };
        });
    }
]);
