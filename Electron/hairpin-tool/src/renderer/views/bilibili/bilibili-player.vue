<template>
    <div>
        <iframe :src="ifrmaeUrl"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"></iframe>
    </div>
</template>

<script>
export default {
    name: 'bilibili-player',
    props: {},
    data() {
        return {
            ifrmaeUrl: '//player.bilibili.com/player.html?aid=29269086&cid=50826365&page=1'
        }
    }
}
</script>

<style>
</style>
