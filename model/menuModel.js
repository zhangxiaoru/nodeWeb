/**
 * Created by gs on 2016/6/14.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema; //创建模型
var ObjectId = Schema.ObjectId;

var menuSchema = new Schema({
    _id:ObjectId,
    menu_name:String,
    menu_pid:ObjectId,
    menu_class:String,
    menu_icon:String,
    menu_url:String,
    sub_menu:Array
});
mongoose.model('menu', menuSchema);

