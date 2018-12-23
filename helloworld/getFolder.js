const fs = require('fs')
const path = require('path')

function getFileName(folder, options) {
    let defaults = {
        filter: '',
        onlyFile: false,
        line: true,
        showLine: false
    }
    let setting = Object.assign({}, defaults, options)
    let exist = fs.existsSync(folder)
    console.log(exist)

    fs.stat(folder, (err, stats) => {
        console.log(stats.isDirectory())

        fs.readdir(folder, function(err, data) {
            if (err) {
                console.log(err)
                return
            }

            if (setting.line) {
                for (let i = 0; i < data.length; i++) {
                    const element = data[i]
                    // showLine
                    console.log(element)
                }
            } else {
                console.log(data)
            }
        })
    })
}

console.log('start')

args = process.argv

console.log(args)

getFileName(args[2], args[3])
