var nodemailer = require("nodemailer")
var _ = require('lodash')

// 开启一个 SMTP 连接池
var smtpTransport = nodemailer.createTransport({
    // service:"163",
    host: "smtp.163.com",
    port: '465',
    secure: "true",
    auth: {
        user: "vsmj012@163.com",
        pass: "mj123456"
    }
})

// 默认邮件内容
var mailOptions = {
    from: "mj <vsmj012@163.com>",
    to: "vsmj012@163.com",
    subject: "Hello world",
    html: "<b>thanks a for visiting!</b> 世界，你好！"
}

module.exports = {
    sendSimpleMail(opt) {
        _.extend(mailOptions, opt)
        smtpTransport.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err)
            } else {
                console.log("Message info: " + info.response)
            }
            smtpTransport.close()
        })
    }
}

