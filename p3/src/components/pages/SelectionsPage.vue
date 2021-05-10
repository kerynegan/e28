<template>
    <div id="selections-page">
        <h1>Decisions I've made</h1>
        <div v-if='!user'>
            Please <a href="/account">log in</a> to see decisions you've made.
        </div>
        <div class="selected-display" v-else-if="selections">
        <ul  class='decision-list'>
<!--For now, I just want to show all of the selections. Once I have the user IDs/authenticaion in place, I'll filter on user ID and display matches with other users, as well as the details about the pick (movie title, meal picture, etc.) -->      
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
            return this.$store.state.user;
        },
        selections() {
            return this.$store.state.selections;
        },

    },
    //reload selections
    methods: {
        mealImgSrc(x) {
            try {
                return require("@/assets/images/meals/" + x + ".jpg");
            } catch (e) {
                return require("@/assets/images/meals/example.jpg");
            }
        },
        mealURL(x) {
            this.url = "/meals/" + x;
            return this.url;
        },
        movieImgSrc(x) {
            try {
                return require("@/assets/images/movies/" + x + ".jpg");
            } catch (e) {
                return require("@/assets/images/movies/example.jpg");
            }
        },
        movieURL(x) {
            this.url = "/movies/" + x;
            return this.url;
        },
        drinkImgSrc(x) {
            try {
                return require("@/assets/images/drinks/" + x + ".jpg");
            } catch (e) {
                return require("@/assets/images/drinks/example.jpg");
            }
        },
        drinkURL(x) {
            this.url = "/drinks/" + x;
            return this.url;
        },
        // updateSelections() {
        //     this.$emit("update-selections");
        // },
        loadMySelections() {
            if (this.user) {
                axios
                    .get("selection/query?user_id=" + this.user.id)
                    .then((response) => {
                        this.mySelections = response.data.selection.map(
                            (selection) => {
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
            this.loadMySelections();
        },
    },
    //whenever we step away to another page and make a new decision, we want to reload our selections.
    mounted() {
        // this.selections;
        this.loadMySelections();
        
    },

}
</script>

<style>
</style>