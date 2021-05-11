<template>
    <div class="show-movie" >
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
        <div class='full centered' v-if="user && moviespage" >
            <h3>Interested in this movie?:</h3>
            <button class="no" type="button" v-on:click="rejectMovie(movie.id)">NO</button>
            <button class="yes" type="button" v-on:click="selectMovie(movie.id)">YES</button>
            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
            <transition name="fade">
                <div
                    class="alert"
                    v-show="showSelected"
                    data-test="show-selected"
                >
                    Your selection was noted.
                </div>
            </transition>
            <transition name="fade">
                <div
                    class="alert"
                    v-show="showRejected"
                    data-test="show-rejected"
                >
                    Your rejection was noted.
                </div>
            </transition>
        </div>
        <div class='full centered' v-else-if="user && !moviespage">
            <br>
            Want to view other movies? <a href="/movies">See our movies page.</a>
        </div>
        <div class='full centered' v-else-if="!user">
            <br>
            Please <a href="/account">log in or register</a> to add this to your list!
        </div>

    </div>
</template>

<script>
import { axios } from "@/common/app.js";
export default {
    props: {
        movie: {
            type: Object,
        },
        moviespage: {
            type: Boolean,
        }
    },
    data() {
        return {
            data: {
                user_id: null,
                movie_id: null,
                movie_decision: null,
            },
            showSelected: false,
            showRejected: false,
            errors: null,
        };
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
        selectMovie(x) {
                axios.post("/selection", 
                    this.selection = {
                        user_id: this.user.id,
                        movie_id: x,
                        movie_decision: "selected",
                    }).then(() => {
                        this.showSelected = true;
                        setTimeout(() => (this.showSelected= false), 1000);
                        this.$emit('update-movie')
                    }
                );

        },
        rejectMovie(x) {
                axios.post("/selection", 
                    this.selection = {
                        user_id: this.user.id,
                        movie_id: x,
                        movie_decision: "rejected",
                    }).then(() => {
                        this.showRejected = true;
                        setTimeout(() => (this.showRejected = false), 1000);
                        this.$emit('update-movie')
                    }
                );
        },
    },
    mounted(){
        this.user;
    }
};
</script>

<style>
</style>