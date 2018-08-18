<template>
    <div>
        <!-- <search-box></search-box>s -->
        <draggable :options="options" draggable=".el-card" @start="drag=true" @end="drag=false">
            <like-card :two="true" v-if="pic">
                <div class="daily-sign">
                    <img :src="picUrl" width="320">
                    <div class="info">
                        <p>告别爱的夏</p>
                        <p style="text-align:right;"> -- by 金莎</p>
                        <p>
                            <span>></span> 有何不可 - 许嵩</p>
                    </div>
                </div>
            </like-card>
            <like-card>
                <weather></weather>
            </like-card>
            <like-card :header="'todo'">
                <todo></todo>
            </like-card>

        </draggable>
    </div>
</template>

<script>
import LikeCard from './like-card'
import Weather from './weather'
import Todo from './todo'
import Draggable from 'vuedraggable'

export default {
    name: 'home',
    props: {},
    data() {
        return {
            q: '',
            selectEngine: '',
            tools: [],
            options: {
                group: 'card',
                touchStartThreshold: 3,
                animation: 700
            },
            pic: false
        }
    },
    methods: {
        setPic() {
            var p1 = parseInt(Math.random() * 29) + 1
            this.picUrl = `http://p2jbdn3yz.bkt.clouddn.com/girl%20%28${p1}%29.jpg`
            setTimeout(() => {
                this.setPic()
            }, 1000 * 60)
        }
    },
    created() {
        this.setPic()
    },
    mounted() {
        let showPic = localStorage.getItem('showPic')
        if (showPic == 'true') {
            this.pic = true
        }
    },
    updated() {},
    computed: {},
    components: {
        // SearchBox,
        Weather,
        Todo,
        Draggable,
        LikeCard
    }
}
</script>

<style scoped>
    .sortable-ghost {
        opacity: 0.5;
    }
    .sortable-chosen {
        cursor: move;
    }
    .info {
        width: 90%;
        position: absolute;
        bottom: 15px;
    }
</style>
