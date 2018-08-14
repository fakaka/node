export default {
    setCoursePrice: course => {
        if (course.pay_type === 2) {
            return '￥' + course.price
        } else {
            return '免费'
        }
    },
    formatMoney: (money, num = 2) => {
        return parseFloat(money).toFixed(num)
    },
    changeCount(x) {
        x = x / 10000
        var y = x.toFixed(1) + '万'
        return y
    },
    formatDuring(mss) {
        if (mss) {
            var minutes = parseInt(mss / 1000 / 60)
            var seconds = parseInt((mss % (1000 * 60)) / 1000)

            seconds = seconds > 9 ? seconds : '0' + seconds
            return minutes >= 10 ? minutes : '0' + minutes + ':' + seconds
        }
        return '00:00'
    },
    toMem(mem) {
        var G = 0
        var M = 0
        var KB = 0
        mem > 1 << 30 && (G = (mem / (1 << 30)).toFixed(2))
        mem > 1 << 20 && mem < 1 << 30 && (M = (mem / (1 << 20)).toFixed(2))
        mem > 1 << 10 && mem > 1 << 20 && (KB = (mem / (1 << 10)).toFixed(2))
        return G > 0 ? G + 'G' : M > 0 ? M + 'M' : KB > 0 ? KB + 'KB' : mem + 'B'
    }
}
