<template>
    <section class="todoapp">
        <header class="header">
            <h1>今天</h1>
            <br>
        </header>
        <ul class="task-list">
            <li class="task selected">
                <div class="t-inner ">
                    <!-- <span class="drag">
                            <img src="../assets/汉堡包.png" alt="" width="14">
                        </span> -->
                    <span class="t-check">
                        <!-- <img src="../assets/方框.png" alt="" width="12"> -->
                    </span>
                    <div class="tips line-right" @click="handleDate">
                        <span class="date-hint show t-date">
                            <span class="text-tny"> 6月1日</span>
                        </span>
                    </div>
                    <div class="title-wrap">
                        <div contenteditable="true" class="editor-with-link can-select transition title text-def typeahead line-left">switch</div>
                        <div class="input-placeholder"></div>
                    </div>
                </div>
                <div class="t-line bottom"></div>
            </li>
            <li class="task">
                <div class="t-inner ">
                    <!-- <span class="drag">
                            <img src="../assets/汉堡包.png" alt="" width="14">
                        </span> -->
                    <span class="t-check">
                        <!-- <img src="../assets/方框.png" alt="" width="12"> -->
                    </span>
                    <div class="tips line-right">
                        <span class="date-hint show t-date">
                            <span class="text-tny"> 6月1日</span>
                        </span>
                    </div>
                    <div class="title-wrap">
                        <div contenteditable="true" class="editor-with-link can-select transition title text-def typeahead line-left">switch</div>
                        <div class="input-placeholder"></div>
                    </div>
                </div>
                <div class="t-line bottom"></div>
            </li>
        </ul>
    </section>
</template>

<script>
var STORAGE_KEY = 'todos-vuejs-2.0'
var todoStorage = {
    fetch() {
        let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        todos.forEach(function(todo, index) {
            todo.id = index
        })
        todoStorage.uid = todos.length
        return todos
    },
    save(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
}

// visibility filters
var filters = {
    all: function(todos) {
        return todos
    },
    active: function(todos) {
        return todos.filter(function(todo) {
            return !todo.completed
        })
    },
    completed: function(todos) {
        return todos.filter(function(todo) {
            return todo.completed
        })
    }
}

export default {
    name: 'todo',
    props: {},
    data() {
        return {
            todos: todoStorage.fetch(),
            visibility: 'all'
        }
    },
    watch: {
        todos: {
            handler: function(todos) {
                todoStorage.save(todos)
            },
            deep: true
        }
    },
    computed: {},
    methods: {
        addTodo: function() {
            var value = this.newTodo && this.newTodo.trim()
            if (!value) {
                return
            }
            this.todos.push({
                id: todoStorage.uid++,
                title: value,
                completed: false
            })
            this.newTodo = ''
        },
        handleDate() {
            console.log('handleDate')
        }
    }
}
</script>

<style scoped>
    .todoapp {
        /* border: 1px solid #000; */
        /* background-color: #fafafa; */
        padding: 1px;
        min-width: 300px;
        max-width: 500px;
        box-sizing: border-box;
    }
    .task {
        position: relative;
        height: 36px;
        overflow: hidden;
        cursor: pointer;
        padding-bottom: 1px;
    }

    .task .t-inner {
        display: block;
        padding-left: 20px;
        padding-right: 10px;
        height: 36px;
        line-height: 36px;
    }

    .task .tips .hints {
        display: inline-block;
    }

    .task .t-line {
        border-top: 1px solid rgba(226, 206, 206, 0.3);
        margin-left: 24px;
    }

    .task.active .tips {
        z-index: 2;
    }

    .task.selected,
    .task.selected:hover {
        background-color: #f3f3f3;
    }

    .task:hover {
        background-color: rgba(243, 243, 243, 0.5);
    }

    .task .drag {
        left: 6px;
    }

    .task .t-check {
        position: absolute;
        padding-right: 10px;
    }

    .task .title-wrap {
        height: 100%;
        margin-left: 24px;
        margin-right: 10px;
    }

    .task .title {
        height: 100%;
        white-space: nowrap;
        word-break: keep-all;
        overflow: hidden;
    }

    .task .tips {
        max-height: 36px;
        z-index: 1;
        white-space: nowrap;
    }

    .task .tips .hints {
        margin-left: 0;
    }

    .task .tips .hints.has-show-icon {
        margin-left: 8px;
    }

    .task .tips .t-date {
        margin-left: 10px;
        display: none;
    }

    .task .tips .t-date.show {
        display: inline;
    }

    .task .tips .t-date {
        font-size: 12px;
    }

    .drag {
        position: absolute;
        cursor: move;
    }
    .line-right {
        z-index: 1;
        float: right;
    }

    .line-left,
    .line-right,
    body {
        position: relative;
    }
</style>
