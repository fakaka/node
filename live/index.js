var exec = require('child_process').exec

var workerProcess = exec('ffmpeg -i http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8 -c copy cctv1.mp4', {}, function(
    error,
    stdout,
    stderr
) {})

workerProcess.stdout.on('data', function(data) {
    console.log('stdout: ' + data)
})

workerProcess.stderr.on('data', function(data) {
    console.log('stderr: ' + data)
})
