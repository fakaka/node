<template>
    <div class="card">
        <div class="user-head" :style="'background-image: url(' + imgData.user.face + ');'"></div>
        <div class="main-content">
            <p class="user-name">
                <span class="c-pointer">{{ imgData.user.uname }}</span>
            </p>
            <p class="time">
                <a :href="getDynamicId(imgData.item.dynamic_id)" target="_blank" class="detail-link">{{ imgData.item.timestamp | formatDate() }}</a>
            </p>
            <div class="card-content">
                <div class="description">{{ imgData.item.content }}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'bilibili-like-text',
    props: {
        imgData: {
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
            return 'http://t.bilibili.com/' + str.substring(0, str.length - 1) + 4
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

</style>
