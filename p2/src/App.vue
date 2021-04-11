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
      <router-view></router-view>
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

            /* Store links in an array to maintain order */
            links: ["home", "movies", "drinks", "meals", "matches"],

            /* Map links to  the appropriate component */
            paths: {
                home: "/",
                movies: "/movies",
                drinks: "/drinks",
                meals: "/meals",
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
        }
    },
};

</script>

<style src='@/assets/css/p2.css'></style>
