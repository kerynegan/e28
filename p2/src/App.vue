<template>
  <div>
    <div id="dev_user">
      <span>Switch user (Jill is default):</span>
      <button type='button' v-on:click='userID = 1'>Jill</button>
      <button type='button' v-on:click='userID = 2'>Jamal</button>
      <button type='button' v-on:click='userID = 3'>Sandy</button>
      <button type='button' v-on:click='userID = 4'>Robert</button>
    </div>
    <div id="header">
      <img
          alt="A Night In logo"
          id="logo"
          src="@/assets/images/logo.png"
      />
      <nav>
          <ul>
              <li>
                  <router-link
                      v-for="link in links"
                      v-bind:key="link"
                      v-bind:to="paths[link]"
                      >{{ link }}</router-link>
              </li>
              <li>
                  User: {{userID}}
              </li>
          </ul>
      </nav>
    </div>
    <div id="main">
        <router-view 
            v-bind:movies="movies"
            v-on:update-movies="loadMovies"
            v-bind:meals="meals"
            v-on:update-meals="loadMeals"
            v-bind:drinks="drinks"
            v-on:update-drinks="loadDrinks"
            v-bind:selections="selections"
            v-on:update-selections="loadSelections"
            v-on:select-movie="selectMovie($event)"
            v-on:reject-movie="rejectMovie($event)"
            v-on:select-meal="selectMeal($event)"
            v-on:select-drink="selectDrink($event)"
            v-bind:show-confirmation="showConfirmation"
        ></router-view>
    </div>
    <div id="footer">
      <p>Copyright (c) Keryn Egan 2021&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Created for DGMD E-28 Spring 2021&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="/credits">Credits Page</a></p>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
    name: "App",
    data() {
        return {
            userID: null,
            movies: [],
            drinks: [],
            meals: [],
            selections:[],
            showConfirmation: false,

            /* Store links in an array to maintain order */
            links: ["home", "movies", "drinks", "meals", "matches"],

            /* Map links to  the appropriate component */
            paths: {
                home: "/",
                movies: "/movies",
                drinks: "/drinks",
                meals: "/meals",
                selections: "/selections",
                matches: "/matches",
            },
        };
    },
    mounted() {
        this.loadMovies();
        this.loadDrinks();
        this.loadMeals();
        this.loadSelections();
        this.userID = 1;
    },
    methods: {
        loadMovies() {
            axios.get("movie").then((response) => {
                this.movies = response.data.movie;
            });
        },
        loadDrinks() {
            axios.get("drink").then((response) => {
                this.drinks = response.data.drink;
            });
        },
        loadMeals() {
            axios.get("meal").then((response) => {
                this.meals = response.data.meal;
            });
        },
        loadSelections() {
            axios.get("selection").then((response) => {
                this.selections = response.data.selection;
            });
        },
        selectMovie(x){   
          axios.post('/selection', {
            user_id: this.userID,
            movie_id: x, 
            movie_decision: "selected"
            }).then((response) => {
            if (response.data.errors) {
                this.errors = response.data.errors;
            } else {
                this.showConfirmation = true
            }
          });
        },
        rejectMovie(x){   
          axios.post('/selection', {
            user_id: this.userID,
            movie_id: x, 
            movie_decision: "rejected"
            }).then((response) => {
            if (response.data.errors) {
                this.errors = response.data.errors;
            } else {
                this.showConfirmation = true
            }
          });
        },
        selectMeal(x){
        
          axios.post('/selection', {
            user_id: this.userID,
            meal_id: x
            }).then((response) => {
            if (response.data.errors) {
                this.errors = response.data.errors;
                this.displayRandom("meal")
            } else {
                this.showConfirmation = true;
                this.loadMeals();
            }
          });
        },
        selectDrink(x){
          axios.post('/selection', {
            user_id: this.userID,
            drink_id: x
            }).then((response) => {
            if (response.data.errors) {
                this.errors = response.data.errors;
                this.displayRandom("drink")
            } else {
                this.showConfirmation = true;
                this.loadDrinks();
            }
          });
        }
    },
};

</script>

<style src='@/assets/css/p2.css'></style>
