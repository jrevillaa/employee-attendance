/**
* Created on 5/1/15.
*/
'use strict';

/**
* Module dependencies.
*/
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**
* Attendance Schema
*/

var LeaveSchema = new Schema({
    status: {
        type: String,
        default: 'Not Approved',
        trim: true
    },
    content: {
        type: String,
        trim: true
    },
    timein:{
        type: String,
        required: true,
        default: Date.now
    },
    timeout:{
        type: String,
        required: true,
        default: Date.now
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Leave', LeaveSchema);

