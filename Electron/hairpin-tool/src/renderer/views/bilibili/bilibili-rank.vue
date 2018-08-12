<template>
    <div class="sec-rank zone-rank">
        <header class="rank-head">
            <h3>{{ label }}</h3>
        </header>
        <div class="rank-list-wrap">
            <ul class="rank-list hot-list">
                <li v-for="(item, index) in rankData" :key="item.aid" class="rank-item show-detail" :class="isHighlight(index)" v-if="index < 10">
                    <i class="ri-num">{{ index + 1 }}</i>
                    <a :href="perfix + item.aid" target="_blank" :title="item.title" class="ri-info-wrap clearfix">
                        <div class="lazy-img ri-preview">
                            <img alt="" :src="item.pic" :title="item.description">
                        </div>
                        <div class="ri-detail">
                            <p class="ri-title">{{ item.title }}</p>
                            <p class="ri-point">播放: {{ item.play|playCountFilter }} | 收藏: {{ item.favorites|favoritesCountFilter }}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

const BILIBILI_URL_AV = 'https://www.bilibili.com/video/av'

export default {
    name: 'bilibili-rank',
    props: {
        rankData: {
            type: Array
        },
        label: {
            type: String
        }
    },
    data() {
        return {
            perfix: BILIBILI_URL_AV,
        }
    },
    methods: {
        isHighlight(index) {
            return index > 2 ? '' : 'highlight'
        }
    },
    created() {

    },
    computed: {},
    filters: {
        playCountFilter(count) {
            // TODO 换成好的方法
            if (count > 10000) {
                return Math.round(count / 1000) / 10 + 'W'
            } else {
                return count
            }
        },
        favoritesCountFilter(count) {
            return count > 1000 ? Math.round(count / 100) / 10 + 'K' : count
        }
    },
    components: {}
}
</script>

<style scoped>

    ul,
    li {
      padding: 0;
      margin: 0;
      list-style: none;
      font-style: normal;
      text-decoration: none;
      border: none;
      font-family: "Microsoft Yahei", sans-serif;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
    }
    .lazy-img {
      background: url(//s1.hdslb.com/bfs/static/phoenix/home/static/img/img_loading.a351656.png)
        50% no-repeat;
      width: 100%;
      height: 100%;
      display: inline-block;
    }

    .lazy-img img {
      display: block;
      width: 100%;
      height: 100%;
    }

    .zone-rank {
      float: left;
      width: 300px;
      min-height: 360px;
    }

    .sec-rank .rank-list-wrap {
      width: 200%;
      overflow: hidden;
      zoom: 1;
      transition: all 0.2s linear;
    }

    .sec-rank .rank-list-wrap .rank-list {
      width: 50%;
      float: left;
    }

    .sec-rank .rank-list-wrap .rank-list .state {
      line-height: 100px;
    }

    .sec-rank .rank-list-wrap.show-origin {
      margin-left: -100%;
    }

    .rank-list .rank-item {
      position: relative;
      padding-left: 25px;
      margin-top: 18px;
      overflow: hidden;
    }

    .rank-list .rank-item.first {
      margin-top: 0;
    }

    .rank-list .rank-item .ri-num {
      position: absolute;
      color: #fff;
      height: 18px;
      line-height: 18px;
      top: 0;
      left: 0;
      font-size: 12px;
      min-width: 12px;
      text-align: center;
      background-color: #b8c0cc;
      border-radius: 4px;
      padding: 0 3px;
      font-weight: bolder;
      font-style: normal;
    }

    .rank-list .rank-item.highlight .ri-num {
      background: #f25d8e;
    }

    .rank-list .rank-item .ri-info-wrap {
      position: relative;
      display: block;
      cursor: pointer;
      font-size: 13px;
    }

    .rank-list .rank-item .ri-preview {
      margin-right: 5px;
      width: 80px;
      height: 50px;
      float: left;
      display: none;
      border-radius: 4px;
      overflow: hidden;
    }

    .rank-list .rank-item.show-detail .ri-preview {
      display: block;
    }

    .rank-list .rank-item .ri-detail {
      float: left;
    }

    .rank-list .rank-item .ri-detail .ri-title {
      line-height: 18px;
      height: 18px;
      overflow: hidden;
      color: #222;
    }

    .rank-list .rank-item .ri-detail .ri-point {
      line-height: 12px;
      color: #99a2aa;
      font-size: 12px;
      height: 12px;
      margin-top: 3px;
      display: none;
      overflow: hidden;
    }

    .rank-list .rank-item.show-detail .ri-detail .ri-title {
      height: 36px;
      line-height: 18px;
      width: 160px;
      padding: 0;
    }

    .rank-list .rank-item.show-detail .ri-point {
      display: block;
    }

    .rank-list .rank-item:hover .ri-title {
      color: #00a1d6;
    }

    .sec-rank .rank-head h3 {
      float: left;
      font-size: 18px;
      font-weight: 400;
    }
</style>
