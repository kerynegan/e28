<!--For reviewers, note this page is essentially identical in functionality to both the DrinksPage.vue and the MoviesPage.vue-->
<template>
    <div id="meals-page">
        <h1>Meals</h1>
        <div v-if="meal">
            <show-meal
                v-bind:meal="meal"
                v-bind:mealspage="mealspage"
                v-on:update-meal="updateMeal()"
            ></show-meal>
        </div>
        <div v-else>
            <!-- if for some reason the meals didn't load quickly enough for the page, show a button so the user can call the random meal -->
            <button class="yes" type="button" v-on:click="updateMeal()">Ready?</button>
        </div>
    </div>
</template>

<script>
import ShowMeal from "@/components/ShowMeal.vue";
export default {
    components: {
        "show-meal": ShowMeal,
    },
    props: {
        id: {
            type: Number,
        },
        meals: {
            type: Array,
            default: null,
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    data() {
        return {
            meal: null,
            mealspage: true,
        };
    },
    mounted() {
        this.updateMeal();
    },
    watch: {
        // To trigger the loading of our initial random meal, watch prop `meals` --> Thank you, Susan!
        meals() {
            this.updateMeal();
        },
    },
    methods: {
        // randomly chooses a meal to display
        updateMeal() {
            let randomNumber = Math.floor(Math.random() * this.meals.length);
            this.meal = this.meals[randomNumber];
        },
    },

}
</script>

<style>
</style>