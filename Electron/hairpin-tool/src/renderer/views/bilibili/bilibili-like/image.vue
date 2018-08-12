<template>
    <div class="card">
        <div class="user-head" :style="'background-image: url(' + imgData.user.head_url + ');'"></div>
        <div class="main-content">
            <p class="user-name">
                <span class="c-pointer">{{ imgData.user.name }}</span>
            </p>
            <p class="time">
                <a :href="'http://h.bilibili.com/' + imgData.item.id" target="_blank" class="detail-link">{{ imgData.item.upload_time | formatDate('YY-MM-DD') }}</a>
            </p>
            <div class="card-content">
                <div class="description">{{ imgData.item.description }}</div>
                <div class="imagesbox" v-if="imgData.item.pictures">
                    <ul class="img-list">
                        <li class="img-card" v-for="(item, index) in imgData.item.pictures" :key="index">
                            <img :src="item.img_src + '@104w_104h_1e_1c.webp'">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'bilibili-like-image',
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
            let id = parseInt(str.substring(9)) - 2
            var res = 'http://t.bilibili.com/' + str.substring(0, 9) + id
            return res
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
      margin: 5px 11px;
    }
    .imagesbox .img-list .img-card:hover {
      box-shadow: 0 0 4px rgba(0, 160, 214, 0.7);
    }
</style>
