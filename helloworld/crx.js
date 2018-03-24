var express = require('express')

var app = express()

app.get('/', (req, resp) => {
    console.log(new Date())
    resp.setHeader("content-type", "application/xml")
    var ret = `<?xml version='1.0' encoding='UTF-8'?>
    <gupdate xmlns='http://www.google.com/update2/response' protocol='2.0'>
        <app appid='oicnhkobbfjmeojmmdmedkjnnhmiehee'>
            <updatecheck codebase='./SwapVest0.6.3.crx' version='0.6.3' />
        </app>
    </gupdate>
    `
    //http://ooyhwygfv.bkt.clouddn.com/SwapVest0.6.3.crx
    resp.end(ret)
})

app.listen(3000, () => {
    console.log('listen 3000 port')
})