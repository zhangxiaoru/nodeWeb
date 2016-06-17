/**
 * Created by gs on 2016/6/15.
 */
var mongoose = require('mongoose');
var logger = require('../config/logger');

mongoose.connect('mongodb://123.57.17.90/nodeWeb');


// models
require('./menuModel');

exports.Menu = mongoose.model('menu');
