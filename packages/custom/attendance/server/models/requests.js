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

var RequestSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    requestType: {
        type: String,
        trim: true
    },
    linkId:{
        type: String,
        required: true
    },
    timein:{
        type: String,
        required: false
    },
    timeout:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Request', RequestSchema);

