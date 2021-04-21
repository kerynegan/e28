<template>
  <div>
    <div id="dev_user">
      <!-- Change your user ID to see that the user_id in the selections table matches correctly  -->
      <span>Switch user (Jill is default):</span>
      <button type='button' v-on:click='userID = 1'>Jill</button>
      <button type='button' v-on:click='userID = 2'>Jamal</button>
      <button type='button' v-on:click='userID = 3'>Sandy</button>
      <button type='button' v-on:click='userID = 4'>Robert</button>
    </div>
    <div id="header">
      <!-- Logo is my design -->
      <img
          alt="A Night In logo"
          id="logo"
          src="@/assets/images/logo.png"
      />
      <nav>
          <ul>
              <li>
                <!-- display navigation -->
                  <router-link
                      v-for="link in links"
                      v-bind:key="link"
                      v-bind:to="paths[link]"
                      >{{ link }}</router-link>
              </li>
              <!-- display the user ID chosen at the top of the page -->
              <li>
                  User: {{userID}}
              </li>
          </ul>
      </nav>
    </div>
    <div id="main">
        <router-view 
            v-bind:userID="userID"
            v-bind:movies="movies"
            v-on:update-movies="loadMovies"
            v-bind:drinks="drinks"
            v-on:update-drinks="loadDrinks"
            v-bind:meals="meals"
            v-on:update-meals="loadMeals"
            v-bind:selections="selections"
            v-on:update-selections="loadSelections"
            v-on:select-movie="selectMovie($event)"
            v-on:reject-movie="rejectMovie($event)"
            v-on:select-drink="selectDrink($event)"
            v-on:reject-drink="rejectDrink($event)"
            v-on:select-meal="selectMeal($event)"
            v-on:reject-meal="rejectMeal($event)"
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
        this.userID = 1; //default ID is Jill's number 1
    },
    methods: {
      //these four functions load API tables for movies, drinks, meals, and selections, respectively.
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
        //if the user selects the movie (called on ShowMovie.vue, passed to MoviesPage, then here via $event above)
        selectMovie(x){   
          //post a new row with user, movie, and string 'selected' to the selections table
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
        //if the user rejects the movie (called on ShowMovie.vue, passed to MoviesPage, then here via $event above)
        rejectMovie(x){   
          axios.post('/selection', {
            //post a new row with user, movie, and string 'rejected' to the selections table
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
        //if the user selects the drink (called on ShowDrink.vue, passed to DrinksPage, then here via $event above)
        selectDrink(x){   
          //post a new row with user, drink, and string 'selected' to the selections table
          axios.post('/selection', {
            user_id: this.userID,
            drink_id: x, 
            drink_decision: "selected"
            }).then((response) => {
            if (response.data.errors) {
                this.errors = response.data.errors;
            } else {
                this.showConfirmation = true
            }
          });
        },
        rejectDrink(x){   
          axios.post('/selection', {
             //post a new row with user, drink, and string 'rejected' to the selections table
            user_id: this.userID,
            drink_id: x, 
            drink_decision: "rejected"
            }).then((response) => {
            if (response.data.errors) {
                this.errors = response.data.errors;
            } else {
                this.showConfirmation = true
            }
          });
        },
        //if the user selects the meal (called on ShowMeal.vue, passed to MealsPage, then here via $event above)
        selectMeal(x){   
          axios.post('/selection', {
          //post a new row with user, meal, and string 'selected' to the selections table
            user_id: this.userID,
            meal_id: x, 
            meal_decision: "selected"
            }).then((response) => {
            if (response.data.errors) {
                this.errors = response.data.errors;
            } else {
                this.showConfirmation = true
            }
          });
        },
        rejectMeal(x){   
          //post a new row with user, meal, and string 'rejected' to the selections table
          axios.post('/selection', {
            user_id: this.userID,
            meal_id: x, 
            meal_decision: "rejected"
            }).then((response) => {
            if (response.data.errors) {
                this.errors = response.data.errors;
            } else {
                this.showConfirmation = true
            }
          });
        },
    },
};

</script>

<style src='@/assets/css/p2.css'></style>
