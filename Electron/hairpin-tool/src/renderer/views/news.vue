<template>
    <div>
        <el-row>
            <el-col :span="12">
                <div class="news-card oschina"
                     v-if="oscNews">
                    <el-card class="box-card">
                        <div slot="header"
                             class="clearfix">
                            <span>开源中国</span>
                            <el-button style="float: right; padding: 3px 0"
                                       type="text"
                                       circle
                                       icon="el-icon-refresh"></el-button>
                        </div>
                        <div v-for="(item, index) in oscNews"
                             :key="index"
                             class="text item">
                            <a :href="'http://www.oschina.net/news/' + item.id"
                               target="_blank"
                               :title="item.body">
                                {{ item.title }}
                            </a>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="news-card csdn">
                    <el-card class="box-card">
                        <div slot="header"
                             class="clearfix">
                            <span>CSDN</span>
                            <el-button style="float: right; padding: 3px 0"
                                       type="text"
                                       @click="refresh">刷新</el-button>
                        </div>
                        <div v-for="(item, index) in csdnNews"
                             :key="index"
                             class="text item">
                            <a :href="item.url"
                               target="_blank"
                               :title="item.tag">
                                {{ item.title }}
                            </a>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="news-card cnode"
                     v-if="cnodeNews">
                    <el-card class="box-card">
                        <div slot="header"
                             class="clearfix">
                            <span>CNode</span>
                            <el-button style="float: right; padding: 3px 0"
                                       type="text">预留</el-button>
                        </div>
                        <div v-for="(item, index) in cnodeNews"
                             :key="index"
                             class="text item">
                            <a :href="'https://cnodejs.org/topic/' + item.id"
                               target="_blank"
                               :title="item.title">
                                {{ item.title }}
                            </a>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="news-card spring4all">
                    <el-card class="box-card">
                        <div slot="header"
                             class="clearfix">
                            <span>spring4all</span>
                            <el-button style="float: right; padding: 3px 0"
                                       type="text">预留</el-button>
                        </div>
                        <div v-for="(item, index) in spring4allNews"
                             :key="index"
                             v-if="index < 10"
                             class="text item">
                            <a :href="'http://www.spring4all.com/article/' + item.id"
                               target="_blank"
                               :title="item.description">
                                {{ item.title }}
                            </a>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="news-card weibo">
                    <el-card class="box-card">
                        <div slot="header"
                             class="clearfix">
                            <span>微博热搜榜</span>
                            <el-button style="float: right; padding: 3px 0"
                                       type="text">预留</el-button>
                        </div>
                        <div v-for="(item, index) in weiboHot"
                             :key="index"
                             v-if="index > 0 && index < 11"
                             class="text item">
                            <span>{{ index }}. </span>
                            <!-- <a :href="'https://s.weibo.com/weibo/' + item.desc" target="_blank" :title="item.desc"> -->
                            <a :href="item.scheme"
                               target="_blank"
                               :title="item.desc">
                                {{ item.desc }}
                            </a>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
var baseUrl = 'http://localhost:3003/news'

export default {
    name: 'news',
    props: {},
    data() {
        return {
            oscNews: [],
            csdnNews: [],
            cnodeNews: [],
            spring4allNews: [],
            weiboHot: []
        }
    },
    methods: {
        handleChange(val) {
            // console.log(val);
        },
        _getOscData(pageSize = 10) {
            this.$http.get(baseUrl + '/osc?pagesize=' + pageSize).then(resp => {
                // console.log(resp.body)
                if (resp.body.oschina.newslist) {
                    this.oscNews = resp.body.oschina.newslist.news
                }
            })
        },
        _getCSDNData(pageSize = 10) {
            this.$http.get(baseUrl + '/csdn?pagesize=' + pageSize).then(resp => {
                // console.log(resp.body)
                if (resp.body.status == 'true') {
                    this.csdnNews = resp.body.articles
                }
            })
        },
        _getCNodeData(pageSize = 10) {
            this.$http.get(baseUrl + '/cnode?pagesize=' + pageSize).then(resp => {
                // console.log(resp.body)
                if (resp.body.success) {
                    this.cnodeNews = resp.body.data
                }
            })
        },
        _getSpring4allNewsData(page = 1) {
            this.$http.get(baseUrl + '/spring4all?page=' + page).then(resp => {
                // console.log(resp.body)
                if (resp.body.code == 0) {
                    this.spring4allNews = resp.body.data.list
                }
            })
        },
        _getWeiboHotData() {
            this.$http.get('http://localhost:3003/weibo/hot').then(resp => {
                // console.log(resp.body)
                if (resp.body.ok == 1) {
                    this.weiboHot = resp.body.data.cards[0].card_group
                }
            })
        },
        refresh() {
            this._getCSDNData()
        }
    },
    computed: {},
    mounted() {
        this._getOscData()
        this._getCSDNData()
        this._getCNodeData()
        this._getSpring4allNewsData()
        this._getWeiboHotData()
    },
    components: {}
}
</script>

<style>
    .news-card {
        margin: 5px;
        padding: 15px;
    }
    .news-card a {
        color: rgb(0, 0, 0);
    }
    .news-card a:hover {
        color: #409eff;
    }

    .text {
        font-size: 13px;
    }

    .item {
        padding-top: 10px;
        padding-bottom: 12px;
        border-bottom: 1px solid #ebeef5;
        height: 22px;
        line-height: 22px;
    }

    .item:first-child {
        padding-top: 0px;
    }
</style>
