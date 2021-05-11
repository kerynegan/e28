<!--For reviewers, note this page is essentially identical in functionality to both the MealsPage.vue and the DrinksPage.vue-->
<template>
    <div id="drinks-page">
        <h1>Drinks</h1>
        <div v-if="drink">
            <show-drink
                v-bind:drink="drink"
                v-bind:drinkspage="drinkspage"
                v-on:update-drink="updateDrink()"
            ></show-drink>
        </div>
        <div v-else>
            <!-- if for some reason the drinks didn't load quickly enough for the page, show a button so the user can call the random drink -->
            <button class="yes" type="button" v-on:click="updateDrink()">Ready?</button>
        </div>
    </div>
</template>

<script>
import ShowDrink from "@/components/ShowDrink.vue";
export default {
    components: {
        "show-drink": ShowDrink,
    },
    props: {
        id: {
            type: Number,
        },
        drinks: {
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
            drink: null,
            drinkspage: true,
        };
    },
    mounted() {
        this.updateDrink();
    },
    watch: {
        // To trigger the loading of our initial random drink, watch prop `drinks` --> Thank you, Susan!
        drinks() {
            this.updateDrink();
        },
    },
    methods: {
        // randomly chooses a drink to display
        updateDrink() {
            let randomNumber = Math.floor(Math.random() * this.drinks.length);
            this.drink = this.drinks[randomNumber];
        },
    },

}
</script>


<style>
</style>