<!--For reviewers, note this page is essentially identical in functionality to both the MealsPage.vue and the MoviesPage.vue-->
<template>
    <div id="drinks-page">
        <h1>Drinks</h1>
        <div v-if="drink">
            <show-drink
                v-bind:drink="drink"
                v-on:select-drink="selectDrink($event)"
                v-on:reject-drink="rejectDrink($event)"
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
    mounted() {
        this.updateDrink();
    },
    data() {
        return {
            drink: null,
        };
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
        // if we choose a drink using the buttons on the ShowDrink.vue page, this method is called and passes the call up to the parent App.vue
        selectDrink(x) {
            this.$emit("select-drink", x);
            this.updateDrink();
        },
        // if we choose a drink using the buttons on the ShowDrink.vue page, this method is called and passes the call up to the parent App.vue
        rejectDrink(x) {
            this.$emit("reject-drink", x);
            this.updateDrink();
        },
    },

}
</script>


<style>
</style>