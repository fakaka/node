<template>
    <div class="card">
        <div class="user-head" :style="'background-image: url(' + videoData.owner.face + ');'"></div>
        <div class="main-content">
            <p class="user-name">
                <span class="c-pointer">{{ videoData.owner.name }}</span>
            </p>
            <p class="time">
                <a :href="'https://www.bilibili.com/video/av' + videoData.aid" target="_blank" class="detail-link">
                    <span>{{ videoData.pubdate | formatDate }}</span>
                </a>
            </p>
            <div class="card-content">
                <div class="description"></div>
                <div class="video-container">
                    <a target="_blank" :href="'https://www.bilibili.com/video/av' + videoData.aid">
                        <div class="image-area"><img :src="videoData.pic"></div>
                        <div class="text-area">
                            <div class="title">{{ videoData.title}}</div>
                            <div class="content">{{ videoData.desc }}</div>
                            <div class="view-danmaku">
                                <div>
                                    <i class="icon-font icon-play-a"></i>
                                    <span class="view">播放 {{ videoData.stat.view }}</span>
                                </div>
                                <div>
                                    <i class="icon-font icon-danmu-a"></i>
                                    <span class="danmaku">弹幕 {{ videoData.stat.danmaku }}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'bilibili-like',
    props: {
        videoData: {
            type: Object
        }
    },
    data() {
        return {
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
    computed: {
        dynamic_id() {
            if (this.videoData && this.videoData.desc) {
                let str = this.videoData.desc.dynamic_id + ''
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

    }
}
</script>

<style scoped>
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
