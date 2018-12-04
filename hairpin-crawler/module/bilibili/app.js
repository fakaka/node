/**
 * 直播签到
 */
function sign() {
    $.getJSON('https://api.live.bilibili.com/sign/doSign', function(res) {
        // console.log(res)
        console.log('sign : ' + res.msg)
    })
}

function getBagList() {
    $.getJSON('https://api.live.bilibili.com/gift/v2/gift/bag_list', function(res) {
        // console.log(res)
        if (res.code == 0) {
            var list = res.data.list
            // console.log(list)
            giftCount = list.length
            for (let i = 0; i < list.length; i++) {
                const item = list[i]
                bagSend(item.bag_id, item.gift_id, item.gift_num)
            }
        }
    })
}

/**
 *
 * @param {*} bag_id
 * @param {*} gift_id
 * @param {*} gift_num
 */
function bagSend(bag_id, gift_id, gift_num) {
    // console.log(bag_id, gift_id, gift_num)

    var data = {
        uid: 3447141,
        gift_id,
        ruid: 14266048,
        gift_num,
        bag_id,
        platform: 'pc',
        biz_code: 'live',
        biz_id: 46716
        // csrf_token: 'db5fa4c282c44b5f00ca4fa79adbce2b'
    }
    // console.log(data)

    $.ajax({
        url: 'https://api.live.bilibili.com/gift/v2/live/bag_send',
        type: 'POST',
        data: data,
        dataType: 'json',
        success: function(res) {
            console.log(res.msg)
            giftCurr += 1
            if (giftCurr >= giftCount) {
                notify('送礼成功')
            }
        }
    })
}
