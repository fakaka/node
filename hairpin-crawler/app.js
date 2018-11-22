const request = require('request')
const fs = require('fs')

const mzituApp = require('./module/mzitu/app.js')
// mzituApp.start()

const insApp = require('./module/ins/app.js')
insApp.work()

