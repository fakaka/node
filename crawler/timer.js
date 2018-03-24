var schedule = require('node-schedule')
var app = require('./app')

//每分钟执行一次
// var rule = new schedule.RecurrenceRule()
// let times = []
// for (let i = 1; i < 60; i++) {
//     times.push(i)
// }
// rule.minute = times

// 10秒执行一次
// var rule = new schedule.RecurrenceRule()
// rule.second = [0, 10, 20, 30, 40, 50]

// 30秒执行一次
var rule = new schedule.RecurrenceRule()
rule.second = [0, 30]

var j = schedule.scheduleJob(rule, () => {
    console.log(new Date().toLocaleString())
    app.work()
})