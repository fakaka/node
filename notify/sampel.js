const notifier = require('node-notifier')
const path = require('path')

// notifier.notify({
//     'title': 'My notification',
//     'message': 'Hello, there!'
// })

notifier.notify({
    title: 'My awesome title',
    message: 'Hello from node, Mr. User!',
    icon: path.join(__dirname, 'icon.jpg'), // Absolute path (doesn't work on balloons) 
    sound: true, // Only Notification Center or Windows Toasters 
    wait: true // Wait with callback, until user action is taken against notification 
}, function (err, response) {
    // Response is response from notification 
})

notifier.on('click', function (notifierObject, options) {
    // Triggers if `wait: true` and user clicks notification 
    console.log('you click it');
})

notifier.on('timeout', function (notifierObject, options) {
    // Triggers if `wait: true` and notification closes 
})