<template>
    <div class="carousel">
        <el-carousel :interval="10000"
                     :autoplay="false"
                     height="200px">
            <!-- <el-carousel-item v-for="(item,index) in banners"
                              :key="index">
                <div class="carousel-item-image"
                     :style="{backgroundImage:'url('+item.picUrl+')'}" />
            </el-carousel-item> -->
            <el-carousel-item v-for="(item, index) in banners"
                              v-if="item.targetType != 3000"
                              :key="index">
                <a :href="getLink(item.url)"
                   target="_balnk">
                    <img :src="item.picUrl">
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
import { banner } from '../../../../api/index'
export default {
    data() {
        return {
            banners: []
        }
    },
    mounted() {
        this.getBanner()
    },
    methods: {
        getBanner() {
            banner().then(res => {
                this.banners = res.banners
            })
        },
        getLink(url) {
            url = url + ''
            return url.startsWith('/') ? 'http://music.163.com/#' + url : url
        }
    }
}
</script>
<style lang="scss" scoped>
    .carousel {
        padding: 20px 40px;
        .el-carousel__item {
            .carousel-item-image {
                background-size: cover;
                width: 445px;
                height: 200px;
                background-position: 50% 50%;
            }
        }
        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }
        .el-carousel__item:nth-child(2n + 1) {
            background-color: #d3dce6;
        }
    }
</style>
