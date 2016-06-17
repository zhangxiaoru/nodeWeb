/**
 * Created by gs on 2016/6/13.
 */
var baseDao = require("../db/mysqlDB.js");
module.exports = {
    getUsers: function (data,callback) {
        baseDao.getList(data, callback);
    },
    updateUsers: function (data, callback) {
        baseDao.update(data, callback)
    },
    deleteUsers: function (data, callback) {
        baseDao.delete(data, callback);
    },
    addUsers: function (data, callback) {
        baseDao.insert(data, callback);
    }
};