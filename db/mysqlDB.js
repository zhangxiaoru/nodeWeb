/**
 * Created by gs on 2016/6/13.
 */
var mysql = require("mysql");

var pool = mysql.createPool({
    host: '123.57.17.90',
    user: 'zkt',
    password: 'zhangkt0411',
    database: 'nodeWeb'
});


module.exports = {
    /**
     * @param options
     * options
     * sql : String
     * callback : 回调
     * @return
     * data
     * data : Array
     * status : Boolean
     */
    getList: function (options, callback) {
        try {
            var data = {data: null, status: false};
            if (!options.sql)
                return;
            pool.getConnection(function(err, connection){
                connection.query(options.sql,options.params, function (err, rows, fields) {
                    if (!err) {
                        data.data = rows;
                        data.status = true;
                        callback && callback(data);
                        console.log(rows);
                    } else {
                        console.log('查询时出错！' + err);
                    }
                });
                connection.release();
            });

        } catch (err) {
            console.log(err);
        }
    },
    /**
     * @param options
     * options
     * sql : String
     * data : data(user)
     * callback : 回调
     * @return
     * data
     * id : Number
     * status : Boolean
     */
    insert: function (options, callback) {
        try {
            var data = {data: null, status: false};
            if (!options.sql)
                return;
            pool.getConnection(function(err, connection) {
                connection.query(options.sql, options.data, function (err, rows, fields) {
                    if (!err) {
                        data.id = rows.insertId;
                        data.status = true;
                        callback && callback(data);
                    } else {
                        console.log('添加时出错！');
                    }
                });
                connection.release();
            });
        } catch (err) {
            console.log(err);
        }
    },
    /**
     * @param options
     * options
     * sql : String
     * callback : 回调
     * @return
     * data
     * status : Boolean
     */
    delete: function (options, callback) {
        try {
            var data = {data: null, status: false};
            if (!options.sql)
                return;
            pool.getConnection(function(err, connection) {
                connection.query(options.sql, function (err, rows, fields) {
                    if (!err) {
                        data.status = true;
                        callback && callback(data);
                    } else {
                        console.log('删除时出错！');
                    }
                });
                connection.release();
            });
        } catch (err) {
            console.log(err);
        }
    },
    /**
     * @param options
     * options
     * sql : String
     * params : Array
     * callback : 回调
     * @return
     * data
     * status : Boolean
     */
    update: function (options, callback) {
        try {
            var data = {data: null, status: false};
            if (!options.sql)
                return;
            pool.getConnection(function(err, connection) {
                connection.query(options.sql, options.params, function (err, rows, fields) {
                    if (!err) {
                        data.status = true;
                        callback && callback(data);
                    } else {
                        console.log('更新时出错！');
                    }
                });
            });
            connection.release();
        } catch (err) {
            console.log(err);
        }
    }
};