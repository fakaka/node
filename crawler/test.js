var app = require('../notify').desktopNotifer
var message = {
    title: '李艺彤发微博了',
    message: '大家辛苦了\n点击了解详情55',
    sound: true,
    wait: true,
    url: 'http://www.baidu.com'
}
app.notify(message)