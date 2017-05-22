<template>
    <div>
        <md-bottom-bar md-shift v-md-theme="playground.theme">
            <md-bottom-bar-item @click="setTheme('blue')" md-icon="ondemand_video">电影</md-bottom-bar-item>
            <md-bottom-bar-item @click="setTheme('teal')" md-icon="music_note">音乐</md-bottom-bar-item>
            <md-bottom-bar-item @click="setTheme('brown')" md-icon="books" md-active>书籍</md-bottom-bar-item>
            <md-bottom-bar-item @click="setTheme('indigo')" md-icon="photo">图片</md-bottom-bar-item>
        </md-bottom-bar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                playground: {
                    theme: 'brown'
                }
            };
        },
        methods: {
            setTheme(theme) {
                this.playground.theme = theme;
            }
        }
    };
</script>