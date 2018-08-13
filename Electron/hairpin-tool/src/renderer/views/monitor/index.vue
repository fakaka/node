<template>
    <div class="monitor">
        <div id="box_body">
            <div class="urge_item">CPU Usage</div>
            <div class="chart">
                <canvas id="cpu_total"
                        width="100"
                        height="100"></canvas>
                <canvas id="cpu_history"
                        width="400"
                        height="100"></canvas>
            </div>
            <div class="urge_item">Memory Usage</div>
            <div class="chart">
                <canvas id="mem_total"
                        width="100"
                        height="100"></canvas>
                <canvas id="mem_history"
                        width="400"
                        height="100"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js'

export default {
    name: 'monitor',
    data() {
        return {
            cpu_history: {
                user: [],
                kernel: [],
                total: [],
                last_user: [],
                last_kernel: [],
                last_total: []
            },
            mem_history: {
                used: []
            },
            ponits_num: 20,
            cpu_chart_pie: null,
            cpu_chart_line: null
            // mem_chart_pie,
            // mem_chart_line
        }
    },
    methods: {
        init_cpu_history() {
            for (var i = 0; i < this.ponits_num; i++) {
                this.cpu_history.user.push(0)
                this.cpu_history.kernel.push(0)
                this.cpu_history.total.push(0)
            }
            this.cpu_history.last_total.push(100)
            this.cpu_history.last_user.push(50)
            this.cpu_history.last_kernel.push(20)
        },
        init_mem_history() {
            for (var i = 0; i < this.ponits_num; i++) {
                this.mem_history.used.push(0)
            }
        },
        updateData() {
            console.log(1)
            this.updateCpuHistory()
            // updateMemHistory()
        },
        updateCpuHistory() {
            let usage = {
                user: 700,
                kernel: 30,
                total: 100
            }
            this.cpu_history.user.shift()
            this.cpu_history.user.push(usage.user)
            this.cpu_history.kernel.shift()
            this.cpu_history.kernel.push(usage.kernel)
            this.cpu_history.total.shift()
            this.cpu_history.total.push(usage.total)
            this.showCpu()
        },
        updateMemHistory(usage) {
            mem_history.used.shift()
            mem_history.used.push(
                Math.round((usage.capacity - usage.availableCapacity) / usage.capacity * 100)
            )
            showMem()
        },
        showCpu() {
            var history = {
                labels: ['', '', ''],
                datasets: [
                    {
                        fillColor: 'rgba(220,220,220,0.5)',
                        data: cpu_history.total
                    },
                    {
                        fillColor: 'rgba(90,140,255,0.5)',
                        data: cpu_history.kernel
                    },
                    {
                        fillColor: 'rgba(255,90,90,0.5)',
                        data: cpu_history.user
                    }
                ]
            }

            var now = [
                {
                    value: this.cpu_history.total[this.ponits_num - 1],
                    color: 'rgba(220,220,220,0.7)'
                },
                {
                    value: 100 - this.cpu_history.total[this.ponits_num - 1],
                    color: 'rgba(220,220,220,0.3)'
                }
            ]
            var his_ctx = document.getElementById('cpu_history').getContext('2d')
            var now_ctx = document.getElementById('cpu_total').getContext('2d')
            if (!this.cpu_chart_line || !this.cpu_chart_pie) {
                this.cpu_chart_line = new Chart(his_ctx)
                // cpu_chart_pie = new Chart(now_ctx)
            }
            console.log( this.cpu_chart_line)
            this.cpu_chart_line.Line(history, {
                scaleFontSize: 4,
                pointDot: false,
                animation: false
            })
            // cpu_chart_pie.Pie(now, { segmentShowStroke: false, animation: false })
        },
        showMem() {
            var history = {
                labels: (function() {
                    for (var i = 0, labels = []; i < ponits_num; labels.push(''), i++);
                    return labels
                })(),
                datasets: [
                    {
                        fillColor: 'rgba(220,220,220,0.5)',
                        data: mem_history.used
                    }
                ]
            }

            var now = [
                {
                    value: mem_history.used[ponits_num - 1],
                    color: 'rgba(220,220,220,0.7)'
                },
                {
                    value: 100 - mem_history.used[ponits_num - 1],
                    color: 'rgba(220,220,220,0.3)'
                }
            ]
            var his_ctx = document.getElementById('mem_history').getContext('2d')
            var now_ctx = document.getElementById('mem_total').getContext('2d')
            if (!mem_chart_line || !mem_chart_pie) {
                mem_chart_line = new Chart(his_ctx)
                mem_chart_pie = new Chart(now_ctx)
            }
            mem_chart_line.Line(history, { scaleFontSize: 4, pointDot: false, animation: false })
            mem_chart_pie.Pie(now, { segmentShowStroke: false, animation: false })
        }
    },
    mounted() {
        this.init_cpu_history()
        this.init_mem_history()

this.updateData()
        // setInterval(this.updateData, 1000)
    }
}
</script>

<style scoped>
    .monitor {
        background: #fafafa;
    }
    #box_body {
        padding: 20px;
    }

    .chart {
        margin-bottom: 20px;
        font-size: 0;
    }

    .urge_item {
        color: gray;
        padding: 2px 0;
        font-size: 14px;
        border-bottom: #eee 1px solid;
        margin-bottom: 4px;
    }
</style>
