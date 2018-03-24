var db = require('../util/mysql')

module.exports = {
    query(sql, cb) {
        db.query('select content from doc', {}, (results) => {
            console.log(results)
            cb(results)
        })
    }
}