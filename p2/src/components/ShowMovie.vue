<template>
    <div class="show-movie">
        <div class="split left">
            <img v-bind:src="imgSrc" />
        </div>
        <div class="split right">
            <h2 class="title">{{ movie.title }} ({{ movie.year }})</h2>
            <h3>ID is {{ movie.id }}</h3>
            <p class="notes">
                <span class="rating">Rated: {{ movie.mpaa_rating }}</span> <span class="runtime">Runtime: {{ movie.runtime }} minutes</span>
            </p>
            <h3 class="tagline">{{ movie.tagline }}</h3>
            <p class="director">Directed by: {{ movie.director.split(',').join(" and ") }}</p>
            <p class="synopsis">{{ movie.synopsis }}</p>   
            <p>Genres: {{ movie.genres.split(',').join(", ") }}</p>
            <p class="url"><a v-bind:href="movie.tmdb_url" target="_blank">View more details at The Movie Database</a><br>(opens in new window)</p>
            <h3>Interested in this movie?:</h3>
            <!-- <button class="no" type="button" v-on:click="selectIt(movie.id)">No</button> -->
            <button class="yes" type="button" v-on:click="selectIt(movie.id)">YES</button>
            <p v-if="showConfirmation">Your movie was added to your selections!</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
        },
        showConfirmation: {
            type: Boolean,
            default:false
        },
    },
    computed: {
        imgSrc() {
            try {
                return require("@/assets/images/movies/" + this.movie.id + ".jpg");
            } catch (e) {
                return require("@/assets/images/movies/example.jpg");
            }
        },
        
    },
    methods: {
        selectIt(x) {
            this.$emit('select-it', x)
        },
    }

};
</script>

<style>
</style>