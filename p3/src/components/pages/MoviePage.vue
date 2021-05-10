<!--For reviewers, note this page is essentially identical in functionality to both the DrinksPage.vue and the MoviesPage.vue-->
<template>
    <div id="movies-page">
        <div v-if="movie">
            <show-movie
                v-bind:movie="movie"
            ></show-movie>
        </div>
        <div v-else>
            <!-- if for some reason the movies didn't load quickly enough for the page, show a button so the user can call the random movie -->
            Oops something went wrong.<br>
            <button class="yes" type="button" v-on:click="updateMovie()">Reload?</button>
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
            type: String,
        },
        movies: {
            type: Array,
            default: null,
        }
    },
    data() {
        return {
            movie: null,
            x: null,
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
        updateMovie() {
            this.x = parseInt(this.id);
            this.x--;
            this.movie = this.movies[this.x];
        },
    },

}
</script>

<style>
</style>