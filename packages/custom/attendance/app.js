'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Attendance = new Module('attendance');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Attendance.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Attendance.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Attendance.menus.add({
    title: 'attendance example page',
    link: 'attendance example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  Attendance.menus.add({
    title: 'leave example page',
    link: 'leave example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  Attendance.menus.add({
    title: 'requests example page',
    link: 'requests example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  Attendance.aggregateAsset('css', 'attendance.css');

  return Attendance;
});
