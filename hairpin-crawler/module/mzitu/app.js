const axios = require('axios')
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const request = require('request')

var ua = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36'
]

// 给请求指定一个请求头来模拟chrome浏览器
var headers = {
    'User-Agent': ua[0]
}

// 爬图地址
var mziTu = 'http://www.mzitu.com/all'

// 定义存储位置
var basePath = 'E:\\Pic\\mzitu\\'
// var basePath = '/Users/mengjian/Code/Pic/mzitu'

exports.start = start

async function start() {
    var options = {
        headers: headers
    }

    var resp = await axios.get(mziTu, options)
    // console.log(resp.data)
    const $ = cheerio.load(resp.data)

    console.log('====== 开始 =======')
    var yearsEle = $('.year')
    // console.log(years.text())

    for (let i = 0; i < yearsEle.length; i++) {
        if (i < 3) {
            continue
        }

        var yearElem = yearsEle.eq(i)
        year = yearElem.text()

        console.log('---创建文件夹---', year)
        createFolder(path.join(basePath, year))

        monthsEle = yearElem.next().find('.month')

        for (let j = 0; j < monthsEle.length; j++) {
            // if (i < 2 && j < 9) {
            //     continue
            // }

            const monElem = monthsEle.eq(j)
            var month = monElem.text()
            console.log('---创建文件夹---', month)
            createFolder(path.join(basePath, year, month))

            var list = monElem.next().children()

            for (let k = 0; k < list.length; k++) {
                const dayElem = list.eq(k)
                var pageUrl = dayElem.attr('href')
                if (pageUrl) {
                    var folderName = dayElem.text()
                    // 格式化文件名
                    folderName = folderName.replace(':', ' ').replace('?', ' ')
                    // folderName = normaize(folderName)
                    // path.join()
                    var folderPath = path.join(basePath, year, month, folderName)
                    createFolder(folderPath)
                    await downloadImages(folderPath, pageUrl)
                    console.log('( ' + folderName + ' )文件夹图片抓取完成。等待 1s 抓取下一个图集')
                    await sleep(1000)
                }
            }
            console.log('[ ' + month + ' ]文件夹图片抓取完成。等待 5s 抓取下一个月')
            console.log('==========================================')
            await sleep(5000)
        }
        console.log('{ ' + year + ' }文件夹图片抓取完成。等待 10s 抓取下一年')
        console.log('==========================================')
        await sleep(10000)
    }
}

// 创建文件夹
function createFolder(file_path) {
    if (!fs.existsSync(file_path)) {
        fs.mkdirSync(file_path)
    }
}

// 下载文件

async function downloadImages(folder_path, page_url) {
    var resp = await axios.get(page_url, { headers })

    // console.log(resp)
    // 解析html
    var $ = cheerio.load(resp.data)

    // 获取套图的最大数量
    var picNum = $('.pagenavi')
        .find('span')
        .eq(6)
        .text()
    var imageUrlTemp = $('.main-image')
        .find('img')
        .attr('src')

    // 类似 15d01.jpg
    var prefix = imageUrlTemp.substring(0, imageUrlTemp.lastIndexOf('/') + 1)
    var fileNameTemp = imageUrlTemp.substring(imageUrlTemp.lastIndexOf('/') + 1)

    for (let i = 1; i < picNum; i++) {
        let idx = i
        if (i < 10) {
            idx = '0' + i
        }

        fileName = fileNameTemp.substr(0, 3) + idx + fileNameTemp.substr(5)

        console.log('downloading image: ' + fileName)

        // 防盗链加入Referer
        headers = { Referer: 'http://www.mzitu.com' }

        request.get(prefix + fileName, { headers }).pipe(fs.createWriteStream(path.join(folder_path, fileName)))
    }
}

async function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve('success'), time)
    })
}
