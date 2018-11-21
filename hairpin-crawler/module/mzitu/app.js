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
var save_path = '/mnt/data/mzitu'

exports.start = start

async function start() {
    var options = {
        headers: headers
    }

    axios.get(mziTu, options).then(resp => {
        // console.log(resp.data)
        const $ = cheerio.load(resp.data)

        console.log('=============')
        var yearsEle = $('.year')
        // console.log(years.text())

        year = yearsEle.eq(0).text()
        monthsEle = yearsEle
            .eq(0)
            .next()
            .find('.month')
        // yearsEle.each(function(i, elem) {
        //     var year = $(this).text()
        //     console.log(year)
        //     console.log('---创建文件夹---', year)
        //     // createFolder('E:\\Pic\\mzitu\\' + year)
        //     var monthsEle = $(this)
        //         .next()
        //         .find('.month')

        monthsEle.each(function(j, monElem) {
            var month = $(this).text()
            console.log('---创建文件夹---', month)
            createFolder('E:\\Pic\\mzitu\\' + year + '\\' + month)

            var list = $(this)
                .next()
                .children()

            list.each(function(k, dayElem) {
                var pageUrl = $(this).attr('href')
                if (pageUrl) {
                    var folderName = $(this).text()
                    // 格式化文件名
                    // folderName = normaize(folderName)
                    // path.join()
                    downloadImages('E:\\Pic\\mzitu\\' + year + '\\' + month + '\\' + folderName, pageUrl)
                }
            })
        })
        // })
    })
}

// 创建文件夹
function createFolder(file_path) {
    if (!fs.existsSync(file_path)) {
        fs.mkdirSync(file_path)
    }
}

// 下载文件

function downloadImages(folder_path, page_url) {
    axios.get(page_url, { headers }).then(async resp => {
        console.log(resp)
        // 解析html
        var $ = cheerio.load(resp.data)
        var imageUrl = $('.main-image')
            .find('img')
            .attr('src')
        console.log(imageUrl)

        //     try {
        //         // 获取套图的最大数量
        //         // pic_max = soup_sub_1.find('div', (class_ = 'pagenavi')).find_all('span')[6].text
        //         // console.log('套图数量：' + pic_max)
        //         // for j in range(1, int(pic_max) + 1):
        //         //                 # print("子内页第几页：" + str(j))
        //         //                 # j int类型需要转字符串
        //         //                 href_sub = href + "/" + str(j)
        //         //                 print(href_sub)
        //         //                 res_sub_2 = requests.get(href_sub, headers=headers)
        //         //                 soup_sub_2 = BeautifulSoup(res_sub_2.text, "html.parser")
        //         //                 img = soup_sub_2.find('div', class_='main-image').find('img')
        //         //                 if isinstance(img, bs4.element.Tag):
        //         //                     # 提取src
        //         //                     url = img.attrs['src']
        //         //                     array = url.split('/')
        //         //                     file_name = array[len(array)-1]
        //         //                     // print(file_name)
        //         // 防盗链加入Referer
        //         // print('开始保存图片')

        let aa = imageUrl.lastIndexOf('/')
        fileNmae = imageUrl.substring(aa + 1)

        createFolder(folder_path)
        downloadImage(imageUrl, folder_path + '\\' + fileNmae)
        //     } catch (err) {
        //         console.log(err)
        //     }
        // })
    })
}

function downloadImage(url, file) {
    // return new Promise(function (resolve, reject) {
    //     headers = { Referer: 'http://www.mzitu.com' }
    //     var stream = request.get(url, { headers }).pipe(fs.createWriteStream(file))
    //     stream.on('finish', function() {
    //         resolve('OK123')
    //     })
    // })

    // request({ url: url, encoding: 'binary' }, function(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         if (!body) console.log('(╥╯^╰╥)哎呀没有内容。。。')
    //         fs.writeFile(file, body, 'binary', function(err) {
    //             if (err) {
    //                 console.log(err)
    //             }
    //             console.log('o(*￣▽￣*)o偷偷下载' + dir + '/' + filename + ' done')
    //         })
    //     }
    // })
}
