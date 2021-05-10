<!--For reviewers, note this page is essentially identical in functionality to both the DrinksPage.vue and the MoviesPage.vue-->
<template>
    <div id="drinks-page">
        <div v-if="drink">
            <show-drink
                v-bind:drink="drink"
            ></show-drink>
        </div>
        <div v-else>
            Oops, something went wrong.<br>
            <!-- if for some reason the drinks didn't load quickly enough for the page, show a button so the user can call the random drink -->
            <button class="yes" type="button" href="/drinks">Go back to drinks page</button>
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
            type: String,
        },
        drinks: {
            type: Array,
            default: null,
        }
    },
    data() {
        return {
            drink: null,
            x: null,
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
        updateDrink() {
            this.x = parseInt(this.id);
            this.x--;
            this.drink = this.drinks[this.x];
        },
    },

}
</script>

<style>
</style>