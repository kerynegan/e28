<template>
  <div>
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
                      data-test="nav"
                      >{{ link }}</router-link>
              </li>
              <!-- display the user ID chosen at the top of the page -->
              <li v-if="user">
                  User: {{ user.name }}, ID Number: {{ user.id }}
              </li>
              <li v-else>
                  <a href="/account">Login or Register</a>
              </li>
          </ul>
      </nav>
    </div>
    <div id="main">
        <router-view 
            v-bind:movies="movies"
            v-on:update-movies="loadMovies"
            v-bind:drinks="drinks"
            v-on:update-drinks="loadDrinks"
            v-bind:meals="meals"
            v-on:update-meals="loadMeals"
            v-on:update-selections="loadSelections"
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
            movies: [],
            drinks: [],
            meals: [],
            showConfirmation: false,

            /* Store links in an array to maintain order */
            links: ["home", "movies", "drinks", "meals", "account"],

            /* Map links to  the appropriate component */
            paths: {
                home: "/",
                movies: "/movies",
                drinks: "/drinks",
                meals: "/meals",
                account: '/account',
                // matches: "/matches",
            },
        };
    },
    computed: {
      selections() {
        return this.$store.state.selections;
      },
      user() {
         return this.$store.state.user;
      },
    },
    mounted() {
        this.$store.dispatch("authUser");
        this.loadMovies();
        this.loadDrinks();
        this.loadMeals();
        this.loadSelections();
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
            this.$store.dispatch('fetchSelections');
        },
        //if the user rejects the movie (called on ShowMovie.vue, passed to MoviesPage, then here via $event above)
        rejectMovie(x){   
          axios.post('/selection', {
            //post a new row with user, movie, and string 'rejected' to the selections table
            user_id: this.user.id,
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
            user_id: this.user.id,
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
            user_id: this.user.id,
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
            user_id: this.user.id,
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
            user_id: this.user.id,
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