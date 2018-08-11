<template>
    <div class="music-index">
        <el-tabs v-model="activeName"
                 @tab-click="handleClick">
            <el-tab-pane label="精选"
                         name="choiceness">
                <choiceness />
            </el-tab-pane>
            <el-tab-pane label="歌手"
                         name="singer">
                <singer />
            </el-tab-pane>
            <el-tab-pane label="排行"
                         name="toplist">
                <toplist />
            </el-tab-pane>
            <el-tab-pane label="电台"
                         name="dj">
                <dj />
            </el-tab-pane>
            <el-tab-pane label="分类歌单"
                         name="playlist">
                <playlist />
            </el-tab-pane>
            <el-tab-pane label="有声"
                         name="ys"></el-tab-pane>
            <el-tab-pane label="数字专辑"
                         name="szzj"></el-tab-pane>
        </el-tabs>
        <div class="music-body">
        </div>
    </div>
</template>
<script>
import choiceness from './choiceness'
import playlist from './playlist'
import toplist from './toplist'
import singer from './singer'
import dj from './dj'
export default {
    components: {
        choiceness,
        playlist,
        toplist,
        singer,
        dj
    },
    data() {
        return {
            activeName: 'choiceness'
        }
    },
    mounted() {},
    methods: {
        handleClick() {}
    }
}
</script>
<style lang="scss" scoped>
    .music-index {
        display: flex;
        overflow: hidden;
        flex: 1;
        flex-direction: column;
        /deep/ .el-tabs {
            height: 40px;
            background: #fafafa;
            .el-tabs__header {
                padding: 0;
                margin: 0;
            }
            .el-tabs__nav-scroll {
                display: flex;
                justify-content: center;
                padding: 0;
            }
            .el-tabs__nav-wrap::after {
                display: none;
            }
            .el-tabs__item {
                font-size: 14px;
            }
        }
        .music-body {
            background: #f0f0f0;
            flex: 1;
            overflow: hidden;
            display: flex;
        }
    }
</style>
