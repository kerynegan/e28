<!--For reviewers, note this page is essentially identical in functionality to both the MealsPage.vue and the DrinksPage.vue-->
<template>
    <div id="movies-page">
        <h1>Movies</h1>
        <div v-if="movie">
            <show-movie
                v-bind:movie="movie"
                v-bind:moviespage="moviespage"
                v-on:update-movie="updateMovie()"
            ></show-movie>
        </div>
        <div v-else>
            <!-- if for some reason the movies didn't load quickly enough for the page, show a button so the user can call the random movie -->
            <button class="yes" type="button" v-on:click="updateMovie()">Ready?</button>
        </div>
    </div>
</template>

<script>
import ShowMovie from "@/components/ShowMovie.vue";
export default {
    components: {
        "show-movie": ShowMovie,
    },
    props: {
        id: {
            type: Number,
        },
        movies: {
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
            movie: null,
            moviespage: true,
        };
    },
    mounted() {
        this.updateMovie();
    },
    watch: {
        // To trigger the loading of our initial random movie, watch prop `movies` --> Thank you, Susan!
        movies() {
            this.updateMovie();
        },
    },
    methods: {
        // randomly chooses a movie to display
        updateMovie() {
            let randomNumber = Math.floor(Math.random() * this.movies.length);
            this.movie = this.movies[randomNumber];
        },
    },

}
</script>

<style>
</style>