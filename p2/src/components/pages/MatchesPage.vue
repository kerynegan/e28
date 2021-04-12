<template>
    <div id="matches-page">
        <h1>Matches</h1>

    </div>
</template>

<script>

export default {
    props: {
        matches: {
            type: Array,
            default: null,
        }
    },
    methods: {
        imgSrc(x) {
            try {
                return require("@/assets/images/movies/" + x + ".jpg");
            } catch (e) {
                return require("@/assets/images/movies/example.jpg");
            }
        }
    },
    data() {
        return {};
    },
};
</script>

<style>
</style>