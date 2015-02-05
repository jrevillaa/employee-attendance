'use strict';

angular.module('mean.profile').factory('Profile', ['$resource',
  function($resource) {
      return $resource('profile/:userId',
      {
          userId : '@_uid'
      },
      {
          update: {
              method: 'PUT'
          }
      });
  }
]);
