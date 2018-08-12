<template>
    <div>
        <div class="recommend-module">
            <div v-for="(item, index) in recommendData"
                 :key="index + 12"
                 class="groom-module home-card">
                <a :href="'https://www.bilibili.com/video/av' + item.aid"
                   target="_blank"
                   :title="item.title">
                    <img :src="item.pic"
                         :alt="item.title"
                         width="160"
                         height="100">
                    <div class="card-mark">
                        <p class="title">{{ item.title }}</p>
                        <p class="author">{{ item.author }}</p>
                        <p class="play">播放：{{ item.play }} </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bilibili-recommend',
    props: {
        recommendData: {
            type: Array
        }
    },
    data() {
        return {}
    },
    methods: {},
    created() {},
    computed: {},
    components: {}
}
</script>

<style scoped>
    .recommend-module {
        position: relative;
        width: 710px;
        height: 100%;
        overflow: hidden;
    }
    .recommend-module .groom-module {
        float: left;
        margin: 10px 15px 10px 0;
    }
    .groom-module {
        width: 160px;
        height: 100px;
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        background: #fff;
    }
    .groom-module img {
        width: 160px;
        height: 100px;
    }
    .groom-module .card-mark {
        position: absolute;
        left: 0;
        top: 68px;
        width: 150px;
        height: 100%;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        padding: 10px 5px;
        overflow: hidden;
        background: #000;
        background: -webkit-linear-gradient(
            transparent,
            rgba(0, 0, 0, 0.1) 20%,
            rgba(0, 0, 0, 0.2) 35%,
            rgba(0, 0, 0, 0.6) 65%,
            rgba(0, 0, 0, 0.9)
        );
        background: -o-linear-gradient(
            transparent,
            rgba(0, 0, 0, 0.1) 20%,
            rgba(0, 0, 0, 0.2) 35%,
            rgba(0, 0, 0, 0.6) 65%,
            rgba(0, 0, 0, 0.9)
        );
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(transparent),
            color-stop(20%, rgba(0, 0, 0, 0.1)),
            color-stop(35%, rgba(0, 0, 0, 0.2)),
            color-stop(65%, rgba(0, 0, 0, 0.6)),
            to(rgba(0, 0, 0, 0.9))
        );
        background: linear-gradient(
            transparent,
            rgba(0, 0, 0, 0.1) 20%,
            rgba(0, 0, 0, 0.2) 35%,
            rgba(0, 0, 0, 0.6) 65%,
            rgba(0, 0, 0, 0.9)
        );
    }
    .groom-module .card-mark .title {
        color: #fff;
        height: 40px;
        overflow: hidden;
        margin-bottom: 5px;
        word-break: break-all;
        word-wrap: break-word;
    }
    .groom-module .card-mark .author,
    .groom-module .card-mark .play {
        opacity: 0;
        color: #99a2aa;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        -webkit-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }
    .groom-module:hover .card-mark {
        top: 0;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
    }
    .groom-module:hover .card-mark .author,
    .groom-module:hover .card-mark .play {
        opacity: 1;
    }
</style>
