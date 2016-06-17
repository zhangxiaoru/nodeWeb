/**
 * Created by gs on 2016/6/15.
 */
var models = require('../model');
var menu = models.Menu;

exports.getAll = function(param,callback){
    menu.find(param,callback);
};
exports.save = function(param,callback){
    menu.create(param,callback);
}