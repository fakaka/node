var readline = require('readline')
var fs = require('fs')

// fs.readFile('薛之谦-演员.lrc', (err, data) => {
//     // console.log(data)
// })


var rl = readline.createInterface({
    input: fs.createReadStream('薛之谦-演员.lrc'),
    output: process.stdout,
    terminal: false  //这个参数很重要
})

var lrc = []

rl.on('line', (line) => {
    // let time = /\[(\d{2}):(\d{2})\.(\d{2,3})]/g.exec(line)                
    const lrcTimes = line.match(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g)
    if (lrcTimes) {
        const oneTime = /\[(\d{2}):(\d{2})\.(\d{2,3})]/.exec(lrcTimes[0])
        const time = (oneTime[1]) * 60 + parseInt(oneTime[2]) + parseInt(oneTime[3]) / ((oneTime[3] + '').length === 2 ? 100 : 1000)
        let text = line.replace(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g, '').replace(/^\s+|\s+$/g, '')
        if (time) {
            // console.log(text)
            lrc.push([time, text])
        }
    }
})

rl.on("close", () => {
    console.log(lrc)
    process.exit(0)
})


module.exports = lrc

