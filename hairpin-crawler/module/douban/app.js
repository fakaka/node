const axios = require('axios')
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const request = require('request')

const baseUrl = 'http://huaban.com/boards/16042848/'

const basePath = 'E:\\Pic\\douban\\'

var ua = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36'
]

// 给请求指定一个请求头来模拟chrome浏览器
var headers = {
    'User-Agent': ua[0],
    Referer: 'http://huaban.com/boards/',
    'X-Request': 'JSON',
    'X-Requested-With': 'XMLHttpRequest'
}

start()

async function start() {
    var options = {
        headers: headers
    }

    var resp = await axios.get(baseUrl, options)
    // console.log(resp.data)
    var result = resp.data
    console.log('====== 开始 =======')
    var board_id = result.board.board_id + ''

    console.log('下载文件夹 ' + board_id)
    createFolder(path.join(basePath, board_id))

    var next_max = downloadPage(result.board)

    nextPage(next_max)
}

function downloadPage(board) {
    var pins = board.pins
    var board_id = board.board_id + ''
    
    const size = pins.length

    for (let i = 0; i < size; i++) {
        var pin = pins[i]
        var imageUrl = 'http://img.hb.aicdn.com/' + pin.file.key
        // var fileName = pin.raw_text + '.jpg'
        var fileName = pin.pin_id + '.jpg'
        console.log('downloading image: ' + fileName)
        // 防盗链加入Referer
        // headers = { Referer: 'http://huaban.com/' }
        request.get(imageUrl).pipe(fs.createWriteStream(path.join(basePath, board_id, fileName)))
    }
    if (size) {
        return pins[size - 1].pin_id
    }
    return undefined
}

async function nextPage(max) {
    if (!max) {
        return
    }
    // http://huaban.com/boards/16042848/?max=316035919&limit=20&wfl=1
    var nextPageUrl = baseUrl + '?limit=30&wfl=1&max=' + max
    var options = {
        headers
    }
    // console.log(nextPageUrl)

    var resp = await axios.get(nextPageUrl, options)
    // console.log(resp.data)

    var next_max = downloadPage(resp.data.board)

    console.log('本页图片抓取完成。等待 1s 抓取下一页')
    console.log('==========================================')
    await sleep(1000)

    nextPage(next_max)
}

function createFolder(file_path) {
    if (!fs.existsSync(file_path)) {
        fs.mkdirSync(file_path)
    }
}

async function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve('success'), time)
    })
}
