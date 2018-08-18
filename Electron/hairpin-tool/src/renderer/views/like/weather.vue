<template>
    <div class="detail">
        <a class="seven"
           href="http://tianqi.so.com/weather/101190101"
           target="_blank">未来七天天气</a>
        <div class="title">7月7日－
            <span class="at">南京</span>
            <a href="javascript:;"
               class="change">切换</a>
        </div>
        <div class="select"
             style="display: none;">
            <select class="province"></select>
            <select class="city"></select>
            <select class="town"></select>
            <input type="button"
                   class="ok"
                   value="更换"> </div>
        <div class="curr-day">
            <a href="/"
               target="_blank">
                <img src="https://p.ssl.qhimg.com/dm/60_60_/d/inn/3716a4d4/1-4.png">
                <div class="curr-day-wrap">
                    <span class="weather">25~30°C</span>
                    <span class="feature">雷阵雨</span>
                    <span class="wind">东风 4-5级</span>
                </div>
            </a>
        </div>
        <div class="list">
            <a href="/"
               target="_blank">
                <div>明天</div> <img src="https://p.ssl.qhimg.com/d/inn/9371c065/weather/bg-w/1-1.png">
                <div>多云</div>
                <div>26~31°C</div>
            </a>
            <a href="/"
               target="_blank">
                <div>后天</div> <img src="https://p.ssl.qhimg.com/d/inn/9371c065/weather/bg-w/1-1.png">
                <div>多云</div>
                <div>27~34°C</div>
            </a>
            <a href="/"
               target="_blank">
                <div>7月10日</div> <img src="https://p.ssl.qhimg.com/d/inn/9371c065/weather/bg-w/1-1.png">
                <div>多云</div>
                <div>26~34°C</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'weather',
    props: {},
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
    .seven {
        color: #999;
        position: absolute;
        right: 20px;
    }

    .change {
        color: #19b955;
        margin-left: 8px;
    }

    .select {
        display: none;
        margin-top: 4px;
        text-align: center;
    }
    .curr-day {
        padding: 15px 30px;
        overflow: hidden;
    }

    .curr-day-wrap {
        float: right;
    }

    .curr-day-wrap .weather {
        color: #333;
        font-size: 20px;
    }
    .curr-day-wrap span {
        color: #999;
        display: block;
        font-size: 13px;
        margin-bottom: 5px;
    }

    .list {
        border-top: 1px solid #f2f2f2;
        clear: both;
        padding: 15px;
    }

    .list a {
        color: #333;
        display: inline-block;
        line-height: 20px;
        padding: 2px 0 4px;
        text-align: center;
        width: 90px;
    }

</style>
