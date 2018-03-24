var schedule = require('node-schedule')
var rule = new schedule.RecurrenceRule();

rule.second =[0,10,20,30,40,50]
var j = schedule.scheduleJob( rule, () => {
    console.log(new Date().toLocaleString())
    //app.work()
})