/**
 * Created by gs on 2016/6/14.
 */
var util = require('util');
var dao = require("../../dao");
var menu = dao.MenuDao;

module.exports = function(app){
    app.get('/menu/list',function(req, res, next){
        var menuArray = req.session.menuArray;
        if(util.isNullOrUndefined(menuArray)){
            res.redirect('/');
        }else{
            res.render('system/menu/list', { menuArray: menuArray});
        }
    });
    app.get('/menu/add',function(req, res, next){
        var menuArray = req.session.menuArray;
        if(util.isNullOrUndefined(menuArray)){
            res.redirect('/');
        }else{
            res.render('system/menu/add', { menuArray: menuArray});
        }
    });
}