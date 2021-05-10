<template>
    <div class="show-movie">
        <div class="split left">
            <img v-bind:src="imgSrc" />
        </div>
        <div class="split right">
            <h2 class="title">{{ movie.title }} ({{ movie.year }})</h2>
            <!-- Some of the movies have more than one director, saved as comma-separated strings. This displays them with a nice "space + and + space"-->
            <span class="director">Directed by: {{ movie.director.split(',').join(" and ") }}</span><br />
            <p class="notes">
                <span class="rating">Rated: {{ movie.mpaa_rating }}</span> <span class="runtime"><strong>Runtime:</strong> {{ movie.runtime }} minutes</span>
            </p>
            <h3 class="tagline">{{ movie.tagline }}</h3>
            <p class="synopsis">{{ movie.synopsis }}</p>  
            <!-- Genres are comma-separated strings. This displays them with a nicer comma + space--> 
            <p><strong>Genres:</strong> {{ movie.genres.split(',').join(", ") }}</p>
            <p class="url"><a v-bind:href="movie.tmdb_url" target="_blank">View more details at The Movie Database</a><br>(opens in new window)</p>
        </div>
        <div class='full centered' v-if="user">
            <h3>Interested in this movie?:</h3>
            <button class="no" type="button" v-on:click="decision(movie.id, 'rejected')">NO</button>
            <button class="yes" type="button" v-on:click="decision(movie.id, 'selected')">YES</button>
        </div>
        <div class='full centered' v-else>
            <br>
            Please <a href="/account">log in or register</a> to add this to your list!
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
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        //if user, via the buttons above, makes decision about the movie, pass it to the parent MoviesPage
        decision(x,y) {
            if(y == "selected") {
                this.$emit('select-it', x)
            } else if (y =="rejected")
                this.$emit('reject-it', x)
        },
    }

};
</script>

<style>
</style>