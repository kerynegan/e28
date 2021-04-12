<template>
    <div id="drinks-page">
        <h1>Drinks</h1>
        <div class="show-drink" v-for="drink in drinks" v-bind:key="drink.id">
            <div class="split left">
                <img v-bind:src="imgSrc(drink.id)" />
            </div>
            <div class="split right">
                <h2 class="title">{{ drink.name }}</h2>
                <button class="yes" type="button" v-on:click="selectIt(drink.id)">YES</button>
                <p v-if="showConfirmation">Your drink was added to your selections!</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        drinks: {
            type: Array,
            default: null,
        },
        showConfirmation: {
            type: Boolean,
            default:false
            }
    },
    methods: {
        imgSrc(x) {
            try {
                return require("@/assets/images/movies/" + x + ".jpg");
            } catch (e) {
                return require("@/assets/images/movies/example.jpg");
            }
        },
        selectIt(x) {
            // console.log(x);
            this.$emit('select-drink', x)
        }
    },
    data() {
        return {};
    },
};
</script>

<style>
</style>