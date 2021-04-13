<template>
    <div id="movies-page">
        <h1>Movies</h1>
        <div v-if="movie">
            <show-movie
            v-bind:movie="movie"
            v-on:select-it="selectMovie($event)"
            ></show-movie>
        </div>
        <div v-else-if="reloadMovies">
            <p>Loading...</p>
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
        };
    },
    computed: {
        movie() {
            return this.movies.filter((movie) => {
                return movie.id == Math.floor(Math.random() * this.movies.length);
            }, this.id)[0];
        },
        movieNotFound() {
            return this.reloadMovies();
        },
    },
    methods: {
        selectMovie(x) {
            // console.log("hello" + x);
            this.$emit('select-movie', x)
        },
        reloadMovies() {
            // console.log(x);
            this.$emit('reload-movies');
        },
    },

}
</script>

<style>
</style>