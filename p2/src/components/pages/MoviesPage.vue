<template>
    <div id="movies-page">
        <h1>Movies</h1>
        <div v-if="movie">
            <show-movie
                v-bind:movie="movie"
                v-on:select-it="selectMovie($event)"
                v-on:reject-it="rejectMovie($event)"
            ></show-movie>
        </div>
        <div v-else>
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
    data() {
        return {
            movie: null,
        };
    },
    watch: {
        // To trigger the loading of our initial random movie, watch prop `movies` --> Thank you, Susan!
        movies() {
            this.updateMovie();
        },
    },
    methods: {
        updateMovie() {
            let randomNumber = Math.floor(Math.random() * this.movies.length);
            this.movie = this.movies[randomNumber];
        },
        selectMovie(x) {
            this.$emit("select-movie", x);
            this.updateMovie();
        },
        rejectMovie(x) {
            this.$emit("reject-movie", x);
            this.updateMovie();
        },
    },

}
</script>

<style>
</style>