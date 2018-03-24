var MoneyModel = require('../model/money')
var Promise = require('bluebird')

module.exports = {
    add(obj) {
        var money = new MoneyModel(obj)
        money.save().then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    },
    delete(mid) {
        //TODO _id 改为mid
        return new Promise((resolve, reject) => {
            MoneyModel.remove({ _id: mid }).then((res) => {
                console.log(res)
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    /**
     * 
     */
    findAll() {
        return new Promise((resolve, reject) => {
            MoneyModel.find().then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    

}