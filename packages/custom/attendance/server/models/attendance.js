/**
 * Created on 5/1/15.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;


var validateUserPresent  = function(value, callback) {
    console.log(value);
    console.log(this.user);
    var Attendance = mongoose.model('Attendance');
    Attendance.find({
        $and: [{
            created: value,
            user : this.user
        }]
    }, function(err, attendance) {
        console.log(err);
        console.log(attendance.length);
        callback(err || attendance.length === 0);
    });
};

/**
 * Attendance Schema
 */

var AttendanceSchema = new Schema({
    created: {
        type: Date,
        default: Date.now,
        validate: [validateUserPresent, 'already exists']
    },
    task: {
        type: String,
        trim: true
    },
    timein:{
        type: String,
        required: false
    },
    timeout:{
        type: String,
        required: false
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});


mongoose.model('Attendance', AttendanceSchema);
