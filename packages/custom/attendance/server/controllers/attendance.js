'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Attendance = mongoose.model('Attendance'),
    _ = require('lodash');


/**
 * Find attendance by id
 */
exports.attendance = function(req, res, next, id) {
    Attendance.load(id, function(err, attendance) {
        if (err) return next(err);
        if (!attendance) return res.status(404).json({
            error: 'Unable to find the attendance'
        });
        req.attendance = attendance;
        next();
    });
};

/**
 * Create an Attendance
 */
exports.create = function(req, res) {
    var attendance = new Attendance(req.body);
    var currDate = new Date();
    attendance.created = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate());
    attendance.timein = currDate.getHours() +':'+currDate.getMinutes();
    attendance.user = req.user;

    attendance.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot save the attendance'
            });
        }
        res.json(attendance);

    });
};

/**
 * Update an attendance
 */
exports.update = function(req, res) {

    var attendance = req.attendance;

    attendance = _.extend(attendance, req.body);

    attendance.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot update the attendance'
            });
        }
        res.json(attendance);

    });
};

exports.updateAttendance = function(req, res) {
    var attendance = req.attendance;

//    var attendance = req.params.userId;
    console.log('Parameters === ',attendance);
    attendance = _.extend(attendance, req.body);

    attendance.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot update the attendance'
            });
        }
        res.json(attendance);

    });
};

/**
 * Delete an attendance
 */
exports.destroy = function(req, res) {
    var attendance = req.attendance;

    attendance.remove(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot delete the attendance'
            });
        }
        res.json(attendance);

    });
};

/**
 * Show an attendance
 */
exports.show = function(req, res) {
    res.json(req.attendance);
};

/**
* List of attendance
*/
exports.all = function(req, res) {
    Attendance.find().sort('-created').populate('user', 'name username').exec(function(err, attendance) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot list the attendance'
            });
        }
        res.json(attendance);

    });
};
