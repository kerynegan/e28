<template>
    <div id="selections-page">
        <h1>Decisions I've made</h1>
        <div v-if='!user'>
            Please <a href="/account">log in</a> to see decisions you've made.
        </div>
        <div class="selected-display" v-else-if="selections">
        <ul  class='decision-list'>   
            <li class="show-selection" v-for="selection in mySelections" v-bind:key="selection.id" >  
                <span v-if="selection.meal_id" v-bind:class='selection.meal_decision'> <a v-bind:href="mealURL(selection.meal_id)" data-test="meal-link"><img  class="thumb" v-bind:src="mealImgSrc(selection.meal_id)" /></a></span>
                <span v-else-if="selection.movie_id" v-bind:class='selection.movie_decision'> <a v-bind:href="movieURL(selection.movie_id)" data-test="movie-link"><img  class="thumb" v-bind:src="movieImgSrc(selection.movie_id)" /></a></span>
                <span v-else-if="selection.drink_id" v-bind:class='selection.drink_decision'><a v-bind:href="drinkURL(selection.drink_id)" data-test="drink-link"><img  class="thumb" v-bind:src="drinkImgSrc(selection.drink_id)" /></a></span>
            </li> 
        </ul>
        </div>
        <div v-else>
            <!-- if for some reason the movies didn't load quickly enough for the page, show a button so the user can call the random movie -->
            <button class="yes" type="button" v-on:click="loadMySelections()">Reload my selections</button>
        </div>
    </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
    data() {
        return {
            // filtered: 0,
            mySelections: [],
            url: null,
        }
    },
    computed: {
        user() {
                        // console.log("user");
            return this.$store.state.user;
        },
        selections() {
                        // console.log("selections");
            return this.$store.state.selections;
        },

    },
    //reload selections
    methods: {
        mealImgSrc(x) {
            try {
                // console.log("mealimg");
                return require("@/assets/images/meals/" + x + ".jpg");
            } catch (e) {
                // console.log("mealimgerror");
                return require("@/assets/images/meals/example.jpg");
            }
        },
        mealURL(x) {
            return "/meals/" + x;            
        },
        movieImgSrc(x) {
            try {
                // console.log("movie img");
                return require("@/assets/images/movies/" + x + ".jpg");
            } catch (e) {
                // console.log("movie img error");
                return require("@/assets/images/movies/example.jpg");
            }
        },
        movieURL(x) {
            return "/movies/" + x;            
        },
        drinkImgSrc(x) {
            try {
                            // console.log("drink img");
                return require("@/assets/images/drinks/" + x + ".jpg");
            } catch (e) {
                            // console.log("drink img error");
                return require("@/assets/images/drinks/example.jpg");
            }
        },
        drinkURL(x) {
            return "/drinks/" + x;            
        },
        loadMySelections() {
            if (this.user) {
                axios
                    .get("selection/query?user_id=" + this.user.id)
                    .then((response) => {
                        this.mySelections = response.data.selection.map(
                            (selection) => {
                                // console.log("map selection");
                                return this.$store.getters.getSelectionById(
                                    selection.id
                                );
                            }
                        );
                    });
            }
        },
    },
    watch: {
        user() {
                        // console.log("load selections watch");
            this.loadMySelections();
        },
    },
    //whenever we step away to another page and make a new decision, we want to reload our selections.
    mounted() {
                    // console.log("load selections mounted");
        // this.selections;
        this.loadMySelections();
        
    },

}
</script>

<style>
</style>