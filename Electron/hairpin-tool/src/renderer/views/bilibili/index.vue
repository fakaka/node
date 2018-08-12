<template>
    <el-scrollbar style="width:100%">
        <div class="bilibili">
            <div class="banner"
                 style="height:180px">
                <bilibili-header :bannerImg="bannerImg"></bilibili-header>
            </div>
            <div class=""
                 style="padding:20px">
                <div class="recommend"
                     v-if="recommendData.length">
                    <h3>推荐</h3>
                    <bilibili-recommend :recommendData="recommendData"></bilibili-recommend>
                </div>
                <div class="like">
                    <h3>关注</h3>
                    <!-- <el-tabs v-model="activeName2" type="border-card">
                        <el-tab-pane label="いとう哀" name="first">
                            <bilibili-like :likeData="likeData"></bilibili-like>
                        </el-tab-pane>
                        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs> -->
                    <!-- <el-tabs>
                    <el-tab-pane v-for="(value, key) in likeMap"
                                 :key="key"
                                 :label="value">
                        <bilibili-like :url="getUrl(key)"></bilibili-like>
                    </el-tab-pane>
                </el-tabs> -->
                </div>
                <br>
                <div class="rank"
                     v-if="rankDatas.length == 5"
                     style="float: right;">
                    <h3>排行</h3>
                    <el-tabs tab-position="left"
                             style="height: 730px;">
                        <el-tab-pane v-for="(rankData, index) in rankDatas"
                                     :key="index"
                                     :label="rankMap[rankArr[index]]">
                            <bilibili-rank :label="rankMap[rankArr[index]]"
                                           :rankData="rankData"></bilibili-rank>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </el-scrollbar>
</template>

<script>
import BilibiliHeader from './bilibili-header'
import BilibiliRecommend from './bilibili-recommend'
import BilibiliRank from './bilibili-rank'
import BilibiliLike from './bilibili-like'

const rankMap = {
    '1': '动画',
    '3': '音乐',
    '4': '游戏',
    '5': '娱乐',
    '11': '电视剧',
    '16': '广告',
    '23': '电影',
    '36': '科技',
    '119': '鬼畜',
    '129': '舞蹈',
    '155': '时尚',
    '160': '生活',
    '168': '国产原创相关',
    '181': '影视'
}

const likeMap = {
    '116683': '咬人猫',
    '49922172': '正直少年李发卡',
    '927587': '木鱼水心',
    '259333': '矮乐多Aliga'
}

var root = process.env.API_ROOT
// console.log(root)
// var baseUrl = root + '/bilibili'
var baseUrl = 'http://localhost:3003/bilibili'

export default {
    name: 'bilibili',
    props: {},
    data() {
        return {
            bannerImg:
                'http://i0.hdslb.com/bfs/archive/0ac04c23af3b3297bf02dca163474326898d211d.png',
            likeData: null,
            rankDatas: [],
            recommendData: [],
            rankMap: rankMap,
            rankArr: [1, 3, 4, 129, 181],
            activeName2: 'first',
            likeMap: likeMap
        }
    },
    methods: {
        _getBanner() {
            this.$http.get(baseUrl + '/banner').then(resp => {
                // console.log(resp)
                if (resp.code == 0) {
                    this.bannerImg = resp.data[0].pic
                }
            })
        },
        _getRankData(i, rid) {
            this.$http.get(baseUrl + '/rank?rid=' + rid).then(resp => {
                if (resp.code == 0) {
                    // console.log(resp.data)
                    this.rankDatas[i] = resp.data
                }
            })
        },
        _getRecommendData() {
            this.$http.get(baseUrl + '/recommend').then(resp => {
                // console.log(resp.body)
                if (resp.code == 0) {
                    this.recommendData = resp.data
                }
            })
        },
        /**
         * desc.type
         * 1 = 转发
         * 2 = 图片
         * 4 = 文字
         * 8 = 视频
         * 16= 小视频
         */
        _getLikeData(uid = '927587', idx = 0) {
            this.$http.get(baseUrl + '/user/space?uid=' + uid).then(resp => {
                console.log(resp.body)
                if (resp.code == 0) {
                    var card = resp.data.cards[idx].card
                    var cardData = JSON.parse(card)
                    cardData.type = resp.data.cards[idx].desc
                    // console.log(cardData)
                    this.likeData = cardData
                }
            })
        },
        getUrl(uid) {
            return baseUrl + '/user/space?uid=' + uid
        }
    },
    computed: {},
    mounted() {
        this._getBanner()

        this._getRecommendData()
        // for (let uid in likeMap) {
        //     console.log(likeMap[uid])
        // }

        // for (const key in likeMap) {
        //     if (likeMap.hasOwnProperty(key)) {
        //         const element = likeMap[key]
        //         console.log(key)
        //         console.log(likeMap[key])
        //     }
        // }
        // this._getLikeData('1678535', 0)
    },
    created() {
        this.rankDatas = []
        for (let i = 0; i < this.rankArr.length; i++) {
            const rid = this.rankArr[i]
            this._getRankData(i, rid)
        }
    },
    components: {
        BilibiliHeader,
        BilibiliRank,
        BilibiliRecommend,
        BilibiliLike
    }
}
</script>

<style scoped>
    .bilibili {
        width: 100%;
        /* padding: 20px; */
        background: #fafafa;
        /* display: flex; */
        /* flex: 1; */
        /* flex-direction: column; */
    }
    .rank {
        padding-top: 8px;
        padding-right: 8px;
    }
    .el-tab-pane {
        padding-top: 5px;
        padding-left: 8px;
    }
</style>
