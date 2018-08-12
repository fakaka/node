<template>
    <div>
        <bilibili-like-repost :repostData="likeData"
                              v-if="likeData.type.type == 1"></bilibili-like-repost>
        <bilibili-like-image :imgData="likeData"
                             v-if="likeData.type.type == 2"></bilibili-like-image>
        <bilibili-like-text :imgData="likeData"
                            v-if="likeData.type.type == 4"></bilibili-like-text>
        <bilibili-like-video :videoData="likeData"
                             v-if="likeData.type.type == 8"></bilibili-like-video>
        <bilibili-like-vc-video :videoData="likeData"
                                v-if="likeData.type.type == 16"></bilibili-like-vc-video>
    </div>
</template>

<script>
import bilibiliLikeImage from './bilibili-like/image'
import bilibiliLikeText from './bilibili-like/text'
import bilibiliLikeVideo from './bilibili-like/video'
import bilibiliLikeVcVideo from './bilibili-like/vc-video'
import bilibiliLikeRepost from './bilibili-like/repost'

var baseUrl = 'http://localhost:3003/bilibili'

/**
 * desc.type
 * 1 = 转发
 * 2 = 图片
 * 4 = 文字
 * 8 = 视频
 * 16= 小视频
 * 64= 文章
 */

export default {
    name: 'bilibili-like',
    props: {
        likeData: {
            type: Object
        },
        url:{

        }
    },
    data() {
        return {}
    },
    methods: {
        getDynamicId(str) {
            str = str + ''
            let id = parseInt(str.substring(9)) - 2
            var res = 'http://t.bilibili.com/' + str.substring(0, 9) + id
            return res
        }
    },
    created() {
        let idx = 0
        this.$http.get(this.url).then(resp => {
            console.log(resp.body)
            if (resp.body.code == 0) {
                var card = resp.body.data.cards[idx].card
                var cardData = JSON.parse(card)
                cardData.type = resp.body.data.cards[idx].desc
                // console.log(cardData)
                this.likeData = cardData
            }
        })
    },
    computed: {
        dynamic_id() {
            if (this.likeData && this.likeData.desc) {
                let str = this.likeData.desc.dynamic_id + ''
                let id = parseInt(str.substring(9)) - 2
                return str.substring(0, 9) + id
            }
        }
    },
    filters: {
        formatDate(val) {
            val = parseInt(val + '000')
            var d = new Date(val)
            var year = d.getFullYear()
            var month = d.getMonth() + 1
            var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
            var hour = d.getHours()
            var minutes = d.getMinutes()
            var seconds = d.getSeconds()
            return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
        }
    },
    components: {
        bilibiliLikeImage,
        bilibiliLikeText,
        bilibiliLikeVideo,
        bilibiliLikeVcVideo,
        bilibiliLikeRepost
    }
}
</script>

<style>
    .card {
        position: relative;
        width: 638px;
        background: #fff;
        border: 1px solid rgba(40, 158, 255, 0.5);
        margin-top: 10px;
        border-radius: 8px;
    }
    .card .main-content {
        width: 534px;
        padding-top: 20px;
        margin-left: 88px;
    }
    .card .main-content .user-name {
        font-size: 16px;
        letter-spacing: 0;
        color: #222;
    }
    .card .main-content .user-name span:hover {
        color: #00b5e5;
    }
    .card .main-content .time {
        padding-top: 4px;
        font-size: 12px;
    }
    .card .main-content .time .detail-link {
        color: #23ade5;
        -webkit-transition: color 0.3s ease;
        transition: color 0.3s ease;
    }
    .card .main-content .time .detail-link:hover {
        color: #ff85ad;
    }
    .card .user-head {
        position: absolute;
        width: 48px;
        height: 48px;
        top: 20px;
        left: 24px;
        border-radius: 50%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        cursor: pointer;
    }
    .repost {
        position: relative;
        padding: 8px 12px;
        border-radius: 8px;
        margin-left: -12px;
        background-color: #f4f5f7;
        line-height: 22px;
    }

    .repost .card-content {
        margin-top: 0;
        padding-bottom: 0;
    }
    .up-info {
        width: 100%;
        position: relative;
    }
    .up-info .up-info-avatar {
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .up-info .up-info-name {
        display: inline-block;
        font-size: 14px;
        color: #00a1d6;
        line-height: 24px;
        vertical-align: top;
        padding: 0 8px;
    }
    .up-info .up-info-tip {
        display: inline-block;
        font-size: 12px;
        color: #99a2aa;
        vertical-align: top;
        padding-top: 1px;
    }
    .type-label {
        padding: 1px 4px;
        border-radius: 2px;
        margin-right: 8px;
        background: #fb7299;
        font-size: 12px;
        color: #fff;
        position: relative;
        top: -2px;
    }

    .card-content {
        margin-top: 5px;
        padding-bottom: 12px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .description {
        max-width: 100%;
        max-height: 88px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: justify;
        display: inline-block;
        margin-bottom: 5px;
        font-size: 14px;
        line-height: 22px;
        word-wrap: break-word;
        cursor: pointer;
        color: #222;
    }
    .description:hover {
        color: #23ade5;
    }
</style>
