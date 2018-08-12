<template>
    <div class="card">
        <div class="user-head" :style="'background-image: url(' + videoData.user.head_url + ');'"></div>
        <div class="main-content">
            <p class="user-name">
                <span class="c-pointer">{{ videoData.user.name }}</span>
            </p>
            <p class="time">
                <a :href="getDynamicId(videoData.type.dynamic_id)" target="_blank" class="detail-link">
                    <span>{{ videoData.item.upload_time }}</span>
                </a>
            </p>
            <div class="card-content">
                <div class="text description">{{ videoData.item.description }}</div>
                <div class="vc-video">
                    <video :src="videoData.item.video_playurl" controls="controls" width="400"></video>
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
            return 'http://t.bilibili.com/' + str.substring(0, str.length - 1) + 5
        }
    },
    created() { },
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
