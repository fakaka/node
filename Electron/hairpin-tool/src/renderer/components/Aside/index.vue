<template>
    <div class="wrap">
        <user-info />
        <menus @click-item="handleItem" />
    </div>
</template>
<script>
import UserInfo from './user-info'
import menus from './menu'

export default {
    components: {
        UserInfo,
        menus
    },
    methods: {
        handleItem(index) {
            // console.log(index)
            this.$router.push(index)
        }
    }
}
</script>
<style lang="scss" scoped>
    .wrap {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
</style>
