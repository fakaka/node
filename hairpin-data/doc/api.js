// https://api.live.bilibili.com/gift/v2/gift/bag_list

var bag_list = {
    "code": 0, "msg": "success", "message": "success",
    "data": {
        "list": [
            {
                "bag_id": 63930001, "gift_id": 1, "gift_name": "辣条", "gift_num": 8, "gift_type": 0, "expire_at": 1519488000
            }, {
                "bag_id": 59161330, "gift_id": 109, "gift_name": "红灯笼", "gift_num": 2, "gift_type": 3, "expire_at": 1519804800
            }
        ],
        "time": 1519466631
    }
}


// https://api.live.bilibili.com/gift/v2/live/bag_send

// Form data
// uid=3447141&gift_id=1  &ruid=14266048&gift_num=8&bag_id=63930001&platform=pc&biz_code=live&biz_id=46716&rnd=1519466617&storm_beat_id=0&metadata=&token=&csrf_token=fc09cefb4fc36bd9a4b120d80079b051
// uid=3447141&gift_id=109&ruid=14266048&gift_num=2&bag_id=59161330&platform=pc&biz_code=live&biz_id=46716&rnd=1519466617&storm_beat_id=0&metadata=&token=&csrf_token=fc09cefb4fc36bd9a4b120d80079b051


var bag_send = {
    "code": 0,
    "msg": "success",
    "message": "success",
    "data": {
        "tid": "3447141@1519466786133910765",
        "uid": 3447141,
        "uname": "冰花雪夜奏",
        "ruid": 14266048,
        "rcost": 28023793,
        "gift_id": 1,
        "gift_type": 0,
        "gift_name": "辣条",
        "gift_num": 8,
        "gift_action": "喂食",
        "gift_price": 100,
        "coin_type": "silver",
        "total_coin": 800,
        "metadata": "",
        "fulltext": null,
        "rnd": "1519466617",
        "effect_block": 1,
        "extra": {
            "gift_bag": {
                "bag_id": 63930001, "gift_num": 0
            },
            "top_list": [], "follow": null, "medal": null, "title": null,
            "event": {
                "event_score": 0, "event_redbag_num": 0
            },
            "capsule": {
                "normal": {
                    "coin": 2, "change": 0, "progress": { "now": 8500, "max": 10000 }
                },
                "colorful": {
                    "coin": 0, "change": 0, "progress": { "now": 0, "max": 5000 }
                }
            }
        },
        "gift_effect": {
            "super": 0, "broadcast_msg_list": [], "small_tv_list": [], "beat_storm": null
        }
    }
}

// https://www.douyu.com/member/prop/query
// rid:69964


var query = {
    "result": 0,
    "msg": "\u8bf7\u6c42\u6210\u529f",
    "data":
        {
            "result": "0", "total_num": 30, "unlock_num": 30,
            "list": [
                {
                    "prop_id": 23,
                    "name": "\u7a33",
                    "prop_type": "2",
                    "is_click": 1,
                    "count": 2, "expiry": 28,
                    "icon": "https:\/\/staticlive.douyucdn.cn\/storage\/webpic_resources\/upload\/dygift\/1612\/9e8e5a8a3c442933926d877d62b08b1b.png",
                    "gif": "https:\/\/staticlive.douyucdn.cn\/storage\/webpic_resources\/upload\/dygift\/1612\/982ac6fbc3ec3cbfb126ef8a6d3427a3.gif",
                    "type": 2, "price": "10", "rel_id": "520", "exp": 1, "intro": "", "description": "", "devote": 0, "intimate": 1, "attack": 0
                },
                {
                    "prop_id": 268,
                    "name": "\u7c89\u4e1d\u8367\u5149\u68d2",
                    "prop_type": "2",
                    "is_click": 1, "count": 30,
                    "expiry": 1,
                    "icon": "https:\/\/staticlive.douyucdn.cn\/storage\/webpic_resources\/upload\/dygift\/1705\/7db9beee246848252f1c7fe916259f4e.png",
                    "gif": "https:\/\/staticlive.douyucdn.cn\/storage\/webpic_resources\/upload\/dygift\/1705\/92c614debee11c3db11f853f3c02ed91.gif",
                    "type": 2, "price": "10", "rel_id": "824", "exp": 1,
                    "intro": "\u7c89\u4e1d\u4eec\uff0c\u6325\u821e\u8d77\u4f60\u4eec\u7684\u8367\u5149\u68d2~",
                    "description": "", "devote": 0, "intimate": 1, "attack": 0
                }
            ],
            "used_prop": [], "mst": "", "ry": 0
        }
}


// https://www.douyu.com/member/prop/send
// dy=48e01e6d9ee0d694307251dc06051501&prop_id=23 &num=1&sid=4168448&did=2003187&rid=69964&is_jz=0
// dy=48e01e6d9ee0d694307251dc06051501&prop_id=23 &num=1&sid=4168448&did=2003187&rid=69964&is_jz=0

// dy=48e01e6d9ee0d694307251dc06051501&prop_id=268&num=1&sid=4168448&did=2003187&rid=69964&is_jz=0
// dy=48e01e6d9ee0d694307251dc06051501&prop_id=268&num=1&sid=4168448&did=2003187&rid=69964&is_jz=0

var send1 = {
    "result": 0, "msg": "ok",
    "data": {
        "result": "0", "total_num": 30, "unlock_num": 30,
        "list":
            [
                {
                    "prop_id": 268, "name": "\u7c89\u4e1d\u8367\u5149\u68d2", "prop_type": "2", "is_click": 1, "count": 30, "expiry": 1,
                    "icon": "https:\/\/staticlive.douyucdn.cn\/storage\/webpic_resources\/upload\/dygift\/1705\/7db9beee246848252f1c7fe916259f4e.png",
                    "gif": "https:\/\/staticlive.douyucdn.cn\/storage\/webpic_resources\/upload\/dygift\/1705\/92c614debee11c3db11f853f3c02ed91.gif",
                    "type": 2, "price": "10", "rel_id": "824", "exp": 1, "intro": "\u7c89\u4e1d\u4eec\uff0c\u6325\u821e\u8d77\u4f60\u4eec\u7684\u8367\u5149\u68d2~",
                    "description": "", "devote": 0, "intimate": 1, "attack": 0
                }
            ],
        "used_prop": {
            "prop_id": 23, "prop_name": "\u7a33", "prop_type": "2", "attack": 0
        },
        "mst": "", "ry": 0
    }
}

var send2 = {
    "result": 0, "msg": "ok", "data": {
        "result": "0", "total_num": 30, "unlock_num": 30,
        "list": [
            {
                "prop_id": 268, "name": "\u7c89\u4e1d\u8367\u5149\u68d2", "prop_type": "2", "is_click": 1, "count": 25, "expiry": 1,
                "icon": "https:\/\/staticlive.douyucdn.cn\/storage\/webpic_resources\/upload\/dygift\/1705\/7db9beee246848252f1c7fe916259f4e.png",
                "gif": "https:\/\/staticlive.douyucdn.cn\/storage\/webpic_resources\/upload\/dygift\/1705\/92c614debee11c3db11f853f3c02ed91.gif",
                "type": 2, "price": "10", "rel_id": "824", "exp": 1, "intro": "\u7c89\u4e1d\u4eec\uff0c\u6325\u821e\u8d77\u4f60\u4eec\u7684\u8367\u5149\u68d2~",
                "description": "", "devote": 0, "intimate": 1, "attack": 0
            }
        ],
        "used_prop": {
            "prop_id": 268, "prop_name": "\u7c89\u4e1d\u8367\u5149\u68d2", "prop_type": "2", "attack": 0
        },
        "mst": "", "ry": 0
    }
}


// https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history?visitor_uid=3447141&host_uid=10645492&offset_dynamic_id=0
