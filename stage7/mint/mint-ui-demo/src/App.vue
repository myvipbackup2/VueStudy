<template>
    <div id="app">
        <div class="hd date">
            <div class="edi"><span>入住时间：</span><span>{{startDate}}</span></div>
            <div class="button-orange-l" @click="openStartPicker"><span>修改</span></div>
            <template>
                <mt-datetime-picker
                        ref="pickerStart"
                        type="date"
                        v-model="startDate">
                </mt-datetime-picker>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                startDate: "2017-3-1",
            }
        },
        methods: {
            openStartPicker() {
                this.$refs.pickerStart.open();
            },
            formatDate(DateStr) {
                DateStr = Date.parse(DateStr); //字符串转成时间戳
                var oDate = new Date();
                oDate.setTime(DateStr);
                var y = oDate.getFullYear();
                var M = oDate.getMonth() + 1;
                var d = oDate.getDate();
                var dateFormat = y + '-' + M + '-' + d;
                return dateFormat;
            },
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
