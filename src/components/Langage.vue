<template>
    <div>
        <h1>{{ lang }}</h1>
        <img height="150px" :src="getPathImg(lang)">
    </div>
</template>

<script>
export default {
    props: {
        lang: String,
    },
    data: function() {
        return {
            imagePath: null,
        };
    },
    methods: {
        getPathImg(name) {
            this.imagePath = require('../assets/language/' + name + '.png')
            return this.imagePath
        }
    },
}
</script>

<style scoped>
    div {
        width: 200px;
    }
</style>