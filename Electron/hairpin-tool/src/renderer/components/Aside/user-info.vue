<template>
    <div class="user-info">
        <el-popover title="标题"
                    width="134"
                    trigger="hover"
                    placement="bottom">
            <div class="avatar no-drag"
                 slot="reference"
                 @click="login">
                <img v-if="user.is_login"
                     :src="user.profile.avatarUrl" />
                <img v-else
                     src="../../assets/images/avatar.jpg">
            </div>

            <div>
                这是一段内容,这是一段内容,这是一段内容,这是一段内容。
            </div>
        </el-popover>

        <div class="mt-5">
            <el-button style="color: #555;"
                       type="text"
                       class="no-drag"
                       size="mini"
                       @click="login">
                {{user.is_login?user.profile.nickname:"立即登录"}}
            </el-button>
        </div>
        <div class="font-assist  type-icons"
             v-if="user.is_login">
            <i class="iconfont icon-LV5"></i>
            <i class="iconfont icon-vip"></i>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        login() {
            if (!this.user.is_login) {
                this.$bus.$emit('login')
            }
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    }
}
</script>
<style lang="scss" scoped>
    .user-info {
        -webkit-app-region: drag;
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .avatar {
            width: 45px;
            height: 45px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                cursor: pointer;
            }
        }
        .type-icons {
            display: flex;
            justify-content: center;
            i {
                font-size: 22px;
                color: #999;
                margin-left: 8px;
            }
            i:first-child {
                margin-left: 0;
            }
        }
    }
</style>
