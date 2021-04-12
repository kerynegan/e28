<template>
    <div id="movies-page">
        <h1>Movies</h1>
        <div class="show-movie" v-for="movie in movies" v-bind:key="movie.id">
            <div class="split left">
                <img v-bind:src="imgSrc(movie.id)" />
            </div>
            <div class="split right">
                <h2 class="title">{{ movie.title }} ({{ movie.year }})</h2>
                <p class="notes">
                    <span class="rating">Rated: {{ movie.mpaa_rating }}</span> <span class="runtime">Runtime: {{ movie.runtime }} minutes</span>
                </p>
                <h3 class="tagline">{{ movie.tagline }}</h3>
                <p class="director">Directed by: {{ movie.director.split(',').join(" and ") }}</p>
                <p class="synopsis">{{ movie.synopsis }}</p>
                
                <p>Genres: {{ movie.genres.split(',').join(", ") }}</p>
                <p class="url"><a v-bind:href="movie.tmdb_url" target="_blank">View more details at The Movie Database</a><br>(opens in new window)</p>
                <button class="yes" type="button" v-on:click="selectIt(movie.id)">YES</button>
                <p v-if="showConfirmation">Your movie was added to your selections!</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        movies: {
            type: Array,
            default: null,
        },
        showConfirmation: {
            type: Boolean,
            default:false
            }
    },
    methods: {
        imgSrc(x) {
            try {
                return require("@/assets/images/movies/" + x + ".jpg");
            } catch (e) {
                return require("@/assets/images/movies/example.jpg");
            }
        },
        selectIt(x) {
            // console.log(x);
            this.$emit('select-movie', x)
        }
    },
    data() {
        return {};
    },
};
</script>

<style>
</style>