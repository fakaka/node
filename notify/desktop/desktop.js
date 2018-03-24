const notifier = require('node-notifier')
const path = require('path')
var c = require('child_process')

function notify(options) {
    notifier.notify(options)
    notifier.on('click', (notifierObject, opt)=> {
        console.log('user click it')
        c.exec('start ' + options.url)
    })
}

exports.notify = notify