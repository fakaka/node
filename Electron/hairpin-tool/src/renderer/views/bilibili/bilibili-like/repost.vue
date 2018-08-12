<template>
    <div class="card">
        <div class="user-head" :style="'background-image: url(' + repostData.user.face + ');'"></div>
        <div class="main-content">
            <p class="user-name">
                <span class="c-pointer">{{ repostData.user.uname }}</span>
            </p>
            <p class="time">
                <a :href="'http://h.bilibili.com/' + repostData.item.id" target="_blank" class="detail-link">
                    {{ repostData.item.timestamp | formatDate('YY-MM-DD') }}
                </a>
            </p>
            <div class="card-content">
                <div class="description">{{ repostData.item.content }}</div>
                <div class="post-content repost">

                    <div class="album" v-if="repostData.type.orig_type == 2">
                        <div class="original-poster">
                            <a :href="'//space.bilibili.com/'+ originData.user.uid +'/#/dynamic'" target="_blank" class="username">@ {{ originData.user.name }}:</a>
                        </div>
                        <div class="description">
                            <a href="">
                                {{ originData.item.description }}
                            </a>
                        </div>
                        <div class="imagesbox">
                            <ul class="img-list">
                                <li class="img-card" v-for="(item, index ) in originData.item.pictures" :key="index">
                                    <img :src="item.img_src + '@104w_104h_1e_1c.webp'">
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div v-if="repostData.type.orig_type == 4">
                        <div class="description">{{ originData.item.content }}</div>
                    </div>

                    <div class="video-container" v-if="repostData.type.orig_type == 8">
                        <a target="_blank" :href="'https://www.bilibili.com/video/av' + originData.aid">
                            <div class="image-area"><img :src="originData.pic"></div>
                            <div class="text-area">
                                <div class="title">{{ originData.title}}</div>
                                <div class="content">{{ originData.desc }}</div>
                                <div class="view-danmaku">
                                    <div>
                                        <i class="icon-font icon-play-a"></i>
                                        <span class="view">播放 {{ originData.stat.view }}</span>
                                    </div>
                                    <div>
                                        <i class="icon-font icon-danmu-a"></i>
                                        <span class="danmaku">弹幕 {{ originData.stat.danmaku }}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div v-if="repostData.type.orig_type == 64">
                        <div class="description">暂时不支持文章</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'bilibili-like-repost',
    props: {
        repostData: {
            type: Object
        }
    },
    data() {
        return {
            originData: {}
        }
    },
    methods: {
        getDynamicId(str) {
            str = str + ''
            let id = parseInt(str.substring(9)) - 2
            var res = 'http://t.bilibili.com/' + str.substring(0, 9) + id
            return res
        }
    },
    created() { },
    mounted() {
        let originStr = this.repostData.origin
        // if (originStr) {
        this.originData = JSON.parse(originStr)
        console.log(this.originData)
        // }
    },
    computed: {
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

    }
}
</script>

<style scoped>
    .original-poster .username {
      font-size: 14px;
      color: #5584b8;
      cursor: pointer;
    }

    .description a {
      color: #000;
    }
    .description:hover a {
      color: #23ade5;
    }

    .imagesbox {
      width: 521px;
      text-align: center;
      border: 1px solid #e6e5ef;
      border-radius: 6px;
    }

    .imagesbox .img-list {
      line-height: 0;
      text-align: left;
      vertical-align: top;
      margin: 0;
      padding: 5px;
    }

    .imagesbox .img-list .img-card {
      display: inline-block;
      width: 104px;
      height: 104px;
      vertical-align: top;
      overflow: hidden;
      border-radius: 6px;
      position: relative;
      margin: 5px 10px;
    }
    .imagesbox .img-list .img-card:hover {
      box-shadow: 0 0 4px rgba(0, 160, 214, 0.7);
    }

    .video-container {
      width: 520px;
      height: 127px;
      background: #fff;
      border-radius: 4px;
      text-align: left;
      position: relative;
      border: 1px solid #e6e5ef;
      overflow: hidden;
      cursor: pointer;
    }
    .video-container:hover {
      border: 1px solid #23ade5;
    }

    .video-container:hover .text-area .title {
      color: #23ade5;
    }

    .video-container .image-area,
    .video-container .text-area {
      display: inline-block;
      vertical-align: top;
    }
    .video-container .image-area {
      width: 203px;
      height: 127px;
      position: relative;
    }
    .video-container .image-area img {
      width: 100%;
      height: 100%;
      border-radius: 0 4px 4px 0;
    }
    .video-container .image-area .mask span {
      position: absolute;
      bottom: 8px;
      left: 8px;
      color: #fff;
      font-size: 12px;
    }
    .video-container .text-area {
      width: 289px;
      height: 100%;
      margin: 0 12px 0 16px;
      float: right;
    }
    .video-container .text-area .title {
      transition: color 0.2s cubic-bezier(0.22, 0.58, 0.12, 0.98);
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 14px;
      line-height: 19px;
      /* max-height: 2.714285714285714em; */
      color: #222;
      margin-top: 9px;
      height: 38px;
    }
    .video-container .text-area .content {
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 12px;
      line-height: 19px;
      max-height: 3.166666666666667em;
      margin-top: 3px;
      color: #9aa3ab;
      height: 38px;
    }
    .video-container .text-area .view-danmaku {
      font-size: 12px;
      margin-top: 16px;
      color: #99a2aa;
      line-height: 18px;
    }
    .video-container .text-area .view-danmaku > div {
      width: 72px;
      display: inline-block;
    }

    .c-pointer {
      cursor: pointer;
    }
</style>
