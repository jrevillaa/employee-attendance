'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
    Requests = mongoose.model('Request'),
    _ = require('lodash');

/**
* Find requests by id
*/
exports.requests = function(req, res, next, id) {
    Requests.load(id, function(err, requests) {
        if (err) return next(err);
        if (!requests) return res.status(404).json({
            error: 'Unable to find the requests'
        });
        req.requests = requests;
        next();
    });
};


/**
* Create an requests
*/
exports.create = function(req, res) {
    var requests = new Requests(req.body);
    requests.user = req.user;

    requests.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot save the requests'
            });
        }
        res.json(requests);

    });
};

/**
* Update an requests
*/
exports.update = function(req, res) {
    var requests = req.requests;

    requests = _.extend(requests, req.body);

    requests.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot update the requests'
            });
        }
        res.json(requests);

    });
};

/**
* Delete an requests
*/
exports.destroy = function(req, res) {
    var requests = req.requests;

    requests.remove(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot delete the requests'
            });
        }
        res.json(requests);

    });
};

/**
* Show an requests
*/
exports.show = function(req, res) {
    res.json(req.attendance);
};

/**
* List of requests
*/
exports.all = function(req, res) {
    Requests.find().sort('-created').populate('user', 'name username').exec(function(err, requests) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot list the requests'
            });
        }
        res.json(requests);

    });
};
