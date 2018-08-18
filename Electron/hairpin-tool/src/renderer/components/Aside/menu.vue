<template>
    <el-scrollbar class="menu-view scroll-page">

        <div class="menu-group"
             v-if="menuData"
             v-for="(menu, index) in menuData"
             :key="index">
            <div class="menu-title">
                <div class="left">{{ menu.title }}</div>
                <div class="right">
                    <i :class="menu.icon"
                       class="iconfont"></i>
                </div>
            </div>
            <div class="menu-item"
                 :class="{active :active == menuItem.name }"
                 @click="handleClick(menuItem)"
                 v-for="(menuItem, idx) in menu.subMenu"
                 :key="idx">
                <div class="left">
                    <i :class="menuItem.icon"
                       class="iconfont "></i>{{ menuItem.name }} </div>
            </div>
        </div>

    </el-scrollbar>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            menuData: [
                {
                    title: '在线音乐',
                    // icon: 'icon-xiangxia',
                    subMenu: [
                        {
                            name: '音乐',
                            index: 'music',
                            icon: 'icon-yinyue'
                        },
                        {
                            name: '哔哩哔哩',
                            index: 'bilibili',
                            icon: 'icon-mv'
                        },
                        {
                            name: '性能监控',
                            index: 'monitor',
                            icon: 'icon-diantai'
                        },
                        {
                            name: '设置',
                            index: 'setting',
                            icon: 'icon-yinyue'
                        }
                    ]
                },
                {
                    title: '我的音乐',
                    // icon: 'icon-xiangxia',
                    subMenu: [
                        {
                            name: '我喜欢',
                            index: 'like',
                            icon: 'icon-shoucang hot'
                        },
                        {
                            name: '本地和下载',
                            index: 'screen',
                            icon: 'icon-screen'
                        },
                        {
                            name: '播放历史',
                            index: 'lishi',
                            icon: 'icon-lishi'
                        },
                        {
                            name: '新闻资讯',
                            index: 'news',
                            icon: 'icon-shiting'
                        }
                    ]
                },
                {
                    title: '测试',
                    // icon: 'icon-xiangxia',
                    subMenu: [
                        {
                            name: '测试',
                            index: 'setting',
                            icon: 'icon-yinyue'
                        }
                    ]
                }
            ],
            active: '音乐'
        }
    },
    methods: {
        handleClick(menuItem) {
            this.active = menuItem.name
            this.$emit('click-item', menuItem.index)
        }
    }
}
</script>

<style lang="scss" scoped>
    .scroll-page {
        overflow: hidden;
        /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }

    .menu-view {
        flex: 1;
        overflow: hidden;

        .menu-group {
            margin-bottom: 25px;
            padding: 0 10px;
            .menu-title {
                margin-bottom: 5px;
                font-size: 11px;
                padding-left: 10px;
                display: flex;
                align-items: center;
                color: #666;
                .left {
                    flex: 1;
                }
                .right {
                    width: 95px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    .iconfont {
                        font-size: 14px;
                        color: #888;
                        margin-left: 10px;
                    }
                }
            }
            .menu-item {
                padding: 3px 10px;
                font-size: 12px;
                border-radius: 2px;
                margin-bottom: 3px;
                cursor: pointer;
                .left {
                    .iconfont {
                        margin-right: 10px;
                    }
                    .iconfont.hot {
                        color: #ff4400;
                    }
                }
            }
            .menu-item:hover {
                background: #e6e7e7;
            }

            .menu-item.active {
                background: rgba(49, 194, 124, 0.88);
                color: #fff;
            }
        }
    }
</style>
