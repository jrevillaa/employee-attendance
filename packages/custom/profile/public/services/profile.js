'use strict';

angular.module('mean.profile').factory('Profile', ['$resource',
  function($resource) {
      return $resource('profile/:editUserId',
      {
          editUserId : '@_uid'
      },
      {
          update: {
              method: 'PUT'
          }
      });
  }
]);
