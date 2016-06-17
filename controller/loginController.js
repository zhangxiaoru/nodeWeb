/**
 * Created by zkt on 2016/6/8.
 */

var util = require('util');

module.exports = function(app){
    app.post('/login', function(req, res, next) {
        var uname = req.body.username;
        var pwd = req.body.password;
        if(util.isNullOrUndefined(uname) || '' === uname || util.isNullOrUndefined(pwd) || '' === pwd){
            res.redirect('/');
        }else{
            var user = {uname : uname,pwd : pwd};
            req.session.user = user;
            res.redirect('/index');
        }
    });

};