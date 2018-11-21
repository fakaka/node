const mzituApp = require('./module/mzitu/app.js')
const request = require('request')
const fs = require('fs')

mzituApp.start()

// request.get("https://i.meizitu.net/2018/11/12a01.jpg", {headers: { Referer: 'http://www.mzitu.com' } }).pipe(fs.createWriteStream('E:\\Pic\\mzitu\\2018年\\11月 ( 52 组妹子图 )\\王雨纯警花制服诱惑 娇喘连连让人乖乖缴械投降\\12a01.jpg'))
