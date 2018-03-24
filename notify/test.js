var appNotifier = require('./mobile')
var desktopNotifier = require('./desktop')

var message = {
    title: '李艺彤发微博了',
    message: '大家辛苦了\n点击了解详情555',
    sound: true,
    wait: true,
    url: 'http://www.baidu.com'
}

appNotifier.notify(message, (err, resp) => {
    console.log(resp)
})
desktopNotifier.notify(message)







