<!--For reviewers, note this page is essentially identical in functionality to both the DrinksPage.vue and the MoviesPage.vue-->
<template>
    <div id="meals-page">
        <div v-if="meal">
            <show-meal
                v-bind:meal="meal"
            ></show-meal>
        </div>
        <div v-else>
            <!-- if for some reason the meals didn't load quickly enough for the page, show a button so the user can call the random meal -->
            Oops something went wrong.<br>
            <button class="yes" type="button" v-on:click="updateMeal()">Reload?</button>
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
            type: String,
        },
        meals: {
            type: Array,
            default: null,
        }
    },
    data() {
        return {
            meal: null,
            x: null,
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
        updateMeal() {
            this.x = parseInt(this.id);
            this.x--;
            this.meal = this.meals[this.x];
        },
    },

}
</script>

<style>
</style>