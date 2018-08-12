<template>
    <div>
        <el-container class="container"
                      id="main">
            <el-container style="position: relative;">
                <el-aside width="200"
                          class="aside">
                    <aside-view />
                </el-aside>
                <el-container>
                    <el-header class="header"
                               height="40"
                               style="-webkit-app-region: drag">
                        <header-view />
                    </el-header>
                    <el-main class="main">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </el-main>
                </el-container>
                <!--<playlist/>-->
            </el-container>
            <el-footer class="footer"
                       height="60px">
                <footer-view />
            </el-footer>
        </el-container>
        <login-view />
    </div>
</template>

<script>
import AsideView from '../components/Aside/'
import HeaderView from '../components/Header/'
import FooterView from '../components/Footer/'
import LoginView from '../components/Login/'
import Playlist from '../components/Playlist/'

export default {
    components: {
        AsideView,
        HeaderView,
        FooterView,
        LoginView,
        Playlist
    }
}
</script>
<style lang="scss" scoped>
    .container {
        height: 100vh;
    }
    
    .aside {
        display: flex;
        flex-direction: column;
        background: linear-gradient(to bottom, #efefef, #efefef);
    }

    .header {
        background: #fafafa;
        border-bottom: 1px solid #e4e2e2;
    }

    .main {
        padding: 0;
        margin: 0;
        overflow: hidden;
        display: flex;
        flex: 1;
        flex-shrink: 0;
    }

    .footer {
        background: #f7f7f7;
        padding: 0;
    }
</style>
