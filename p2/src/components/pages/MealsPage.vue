<template>
    <div id="meals-page">
        <h1>Meals</h1>
        <div class="show-meal" v-for="meal in meals" v-bind:key="meal.id">
            <div class="split left">
                <img v-bind:src="imgSrc(meal.id)" />
            </div>
            <div class="split right">
                <h2 class="title">{{ meal.name }}</h2>
                <p class="notes">
                    <span class="rating">Serving Size: {{ meal.serving_size }}</span> <span class="runtime">Total Time: {{ meal.total_time }} minutes</span>
                </p>
                <p class="director">Author: {{ meal.author.split(',').join(" and ") }}</p>
                <p class="synopsis">{{ meal.description }}</p>
                
                <p>Keywords: {{ meal.keywords.split(',').join(", ") }}</p>
                <p>Categories: {{ meal.category.split(',').join(", ") }}</p>
                <p class="url"><a v-bind:href="meal.spoonacular_url" target="_blank">View more details at Spoonacular</a><br>(opens in new window)</p>
                <button class="yes" type="button" v-on:click="selectIt(meal.id)">YES</button>
                <p v-if="showConfirmation">Your meal was added to your selections!</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        meals: {
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
            this.$emit('select-meal', x)

        }
    },
    data() {
        return {};
    },
};
</script>

<style>
</style>