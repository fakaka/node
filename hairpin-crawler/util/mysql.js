var mysql = require('mysql');
var db_config = require('../config').mysql;

var pool = mysql.createPool({
    host: db_config.host,
    port: db_config.port,
    user: db_config.user,
    password: db_config.password,
    database: db_config.database,
    acquireTimeout: 300,
    connectionLimit: 10
});

var db = {
    query: function (sql, values, callback) {
        pool.getConnection(function (err, connection) {
            connection.query(sql, values, function (err, results, fields) {
                if (err) throw err;
                callback(results);
                connection.release();
            });
        });
    },

    close: function () {
        pool.close();
    }
}

module.exports = db;