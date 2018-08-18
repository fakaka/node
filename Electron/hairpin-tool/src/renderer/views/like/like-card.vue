<template>
    <div>
        <el-card class="like-card"
                 :header="header"
                 :body-style="{ padding: '15px' }"
                 :class=" { card_1_2 : two  }"
                 shadow="hover">
            <slot></slot>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'like-card',
    props: {
        two: {
            type: Boolean,
            default: false
        },
        header: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    methods: {},
    created() {},
    computed: {},
    components: {}
}
</script>

<style scoped>
    .like-card {
        position: relative;
        width: 350px;
        height: 300px;
        float: left;
        box-sizing: border-box;
        margin: 10px 10px;
    }

    .card_1_2 {
        height: 620px;
    }
</style>

<style>
    .like-card > .el-card__body {
        /* padding: 15px; */
    }
</style>
