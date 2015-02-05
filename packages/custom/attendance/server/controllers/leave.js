'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
    Leave = mongoose.model('Leave'),
    _ = require('lodash');


/**
* Find leave by id
*/
exports.leave = function(req, res, next, id) {
    Leave.load(id, function(err, leave) {
        if (err) return next(err);
        if (!leave) return res.status(404).json({
            error: 'Unable to find the leave'
        });
        req.leave = leave;
        next();
    });
};


/**
* Create an leave
*/
exports.create = function(req, res) {
    var leave = new Leave(req.body);
    leave.user = req.user;

    leave.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot save the leave'
            });
        }
        res.json(leave);

    });
};

/**
* Update an leave
*/
exports.update = function(req, res) {
    var leave = req.leave;

    leave = _.extend(leave, req.body);

    leave.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot update the leave'
            });
        }
        res.json(leave);

    });
};

/**
* Delete an leave
*/
exports.destroy = function(req, res) {
    var leave = req.leave;

    leave.remove(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot delete the leave'
            });
        }
        res.json(leave);

    });
};

/**
* Show an leave
*/
exports.show = function(req, res) {
    res.json(req.leave);
};

/**
* List of leave
*/
exports.all = function(req, res) {
    Leave.find().populate('user', 'name username').exec(function(err, leave) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot list the leave'
            });
        }
        res.json(leave);

    });
};
