/**
 * Created by gs on 2016/6/13.
 */
var mongoose = require('mongoose');
var util = require("util");
var dao = require("../dao");
var menu = dao.MenuDao;
module.exports = function(app){
    app.get('/index', function(req, res, next) {
        var user = req.session.user;
        if(util.isNullOrUndefined(user) || util.isNullOrUndefined(user.uname)){
            res.redirect("/");
        }else{
            var ObjectId = new mongoose.Types.ObjectId;
            menu.getAll({},function(err,result){
                var menuArray = initMenu(result);
                req.session.menuArray = menuArray;
                res.render('index', { menuArray: menuArray});
            });
        }
    });
    function initMenu(menuData){
        var menuArray = new Array();
        var subMenuArray = new Array();
        if(menuData){
            for(var i = 0 ;i < menuData.length;i++){
                var menu = menuData[i];
                if(util.isNullOrUndefined(menu.menu_pid)){
                    menuArray.push(menu);
                }else{
                    subMenuArray.push(menu);
                }
            }
            for(var i = 0;i < menuArray.length;i++){
                var menu = menuArray[i];
                menu.sub_menu = new Array();
                for(var j = 0 ; j < subMenuArray.length;j++){
                    var subMenu = subMenuArray[j];
                    if(menu._id.toString() === subMenu.menu_pid.toString()){
                        menu.sub_menu.push(subMenu);
                    }
                }

                var tmp = menu.sub_menu;
                for(var k = 0;k < tmp.length;k++){
                    var subMenu = tmp[k];
                    subMenu.sub_menu = new Array();
                    for(var j = 0;j<subMenuArray.length;j++){
                        var senMenu = subMenuArray[j];
                        if(subMenu._id.toString() === senMenu.menu_pid.toString()){
                            subMenu.sub_menu.push(senMenu);
                        }
                    }
                }
            }

        }
        return menuArray;
    }
};