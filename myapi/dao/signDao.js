var db = require('../util/mysql')

module.exports = {
    insert(kid, cb) {
        db.query('insert into sign(kid) values(?)', [kid], (results) => {
            console.log(results)
            cb(results)
        })
    },
    getKid() {
        db.query('select * from user where active = 0 limit 1', {}, (results) => {
            console.log(results)
            cb(results)
            db.query('update user set active = 1 where kid = ?', [results[0].kid], (results) => {
                console.log(results)
                cb(results)
            })
        })
    }
}