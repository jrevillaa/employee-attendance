'use strict';

/* jshint -W098 */
var attendance = require('../controllers/attendance');
var leave = require('../controllers/leave');
var requests = require('../controllers/requests');

// Attendance authorization helpers
var hasAuthorization = function(req, res, next) {
    if (!req.user.isAdmin && req.profile.user.id !== req.user.id) {
        return res.status(401).send('User is not authorized');
    }
    next();
};

// The Package is past automatically as first parameter
module.exports = function (Attendance, app, auth, database) {

    app.route('/attendance/user/created')
        .get(attendance.all)
        .post(auth.requiresLogin, attendance.create);

    app.route('/attendance/:attendanceId/user/created')
        .get(auth.isMongoId, attendance.show)
        .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, attendance.update)
        .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, attendance.destroy);

    app.route('/attendance/:attendanceId/user/:userId/created/:created')
        .get(auth.isMongoId, attendance.show)
        .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, attendance.updateAttendance)
        .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, attendance.destroy);



    // Finish with setting up the attendanceId param
    /*app.param('attendanceId', attendance.updateAttendance);
    app.param('userId', attendance.updateAttendance);
    app.param('created', attendance.updateAttendance);*/

    app.param('attendanceId', attendance.attendance);
    app.param('userId', attendance.attendance);
    app.param('created', attendance.attendance);

    app.route('/leave')
        .get(leave.all);
//        .post(auth.requiresLogin, leave.create);

//    app.route('/leave/:leaveId')
//        .get(auth.isMongoId, leave.show)
//        .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, leave.update)
//        .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, leave.destroy);

    // Finish with setting up the leaveId param
//    app.param('leaveId', leave.leave);

    app.route('/request')
        .get(requests.all)
        .post(auth.requiresLogin, requests.create);

    app.route('/request/:requestId')
        .get(auth.isMongoId, requests.show)
        .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, requests.update)
        .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, requests.destroy);

//    Finish with setting up the requestId param
//    app.param('requestId', requests.attendance);
};
