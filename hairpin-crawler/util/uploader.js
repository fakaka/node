var qiniu = require("qiniu")

qiniu.conf.ACCESS_KEY = 'AsVaXzuKzxfER9FMV4Wwjr3wQth-Nz1cnE4TuSol';
qiniu.conf.SECRET_KEY = 'gyvQq_OBtVpPyu9faiK_bCHs-0JEwafSvhUaFDKK';
//要上传的空间
let bucket = 'mj-dev'
//构建上传策略函数
function uptoken(bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key)
    return putPolicy.token()
}

module.exports = {
    /**
     * 上传文件待7牛云
     * @param {String} key 上传到7牛的文件名
     * @param {String} filePath 本地文件路径
     */
    uploadFile(key, filePath) {
        let token = uptoken(bucket, key)
        let extra = new qiniu.io.PutExtra()
        qiniu.io.putFile(token, key, filePath, extra, (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res.key)
            }
        })
    },
    uploadFileToCos(key, filePath) {
        let token = uptoken(bucket, key)
        let extra = new qiniu.io.PutExtra()
        qiniu.io.putFile(token, key, filePath, extra, (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res.key)
            }
        })
    }
}