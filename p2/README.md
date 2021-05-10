# Project 2
+ By: Keryn Egan
+ Production URL: <http://e28p2.kerynegan.me>

## Pages summary
+ The Home Page [http://e28p2.kerynegan.me](http://e28p2.kerynegan.me) --> Welcome Page.
+ The Movies Page [http://e28p2.kerynegan.me/movies](http://e28p2.kerynegan.me/movies) --> Displays a random movie for the user to decide upon
+ The Drinks Page [http://e28p2.kerynegan.me/drinks](http://e28p2.kerynegan.me/drinks) --> Displays a random drink for the user to decide upon
+ The Meals Page [http://e28p2.kerynegan.me/meals](http://e28p2.kerynegan.me/meals) --> Displays a random meal for the user to decide upon
+ The Matches Page [http://e28p2.kerynegan.me/matches](http://e28p2.kerynegan.me/matches) --> For now, displays a table for all of the selections (all users) made so far. Once the user authentication is up and running for P3, I plan to change it so that it displays the users matches with other users, and shows the corresponding movie/drink/meal data.
+ The Credits Page [http://e28p2.kerynegan.me/credits](http://e28p2.kerynegan.me/credits) --> Simple page to display credits for the data used in the project.

## SFC summary
+ App.vue
+ Components folder
+ .../components/ShowMovie.vue
+ .../components/ShowDrink.vue
+ .../components/ShowMeal.vue
+ --pages folder
+ .../components/pages/HomePage.vue
+ .../components/pages/MoviesPage.vue
+ .../components/pages/DrinksPage.vue
+ .../components/pages/MealsPage.vue
+ .../components/pages/MatchesPage.vue
+ .../components/pages/CreditsPage.vue
  
## Server interaction
+ Reads data from the movies table on [the Movies Page](http://e28p2.kerynegan.me/movies) 
+ Reads data from the meals table on [the Meals Page](http://e28p2.kerynegan.me/meals)
+ Reads data from the drinks table on [the Drinks Page](http://e28p2.kerynegan.me/drinks)
+ Reads data from the selections table on [the Matches Page](http://e28p2.kerynegan.me/matches)
+ Writes data (user_id, selection id, decision) to the selections table from the buttons on the Movies/Drinks/Meals pages.


## Outside resources
+ All movie data is from [The Movie Database](https://www.themoviedb.org/).
+ All meal data is from [Spoonacular](https://spoonacular.com/).
+ All drink data is from [the Cocktails Database](https://www.thecocktaildb.com/).
+ All gradient code created thanks to [CSS Gradient](https://cssgradient.io/).
+ [Emits documentation](https://v3.vuejs.org/guide/migration/emits-option.html#_2-x-behavior) for the user change buttons 
+ [Combining .split() and .join() via StackOverflow](https://stackoverflow.com/questions/10982913/javascript-how-to-show-each-element-of-array-on-a-new-line) and the [MDN documentation on split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) [and join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) for a nicer display of the movie genres

## Notes for instructor
+ I wanted to be able to see that the user IDs were being written correctly to the selections table, so I created the little "switch users" panel at the top of all of the pages. As you'll see, all it does is change a variable userID in App.vue to a different number, so it can be pushed to the selections table with the item's ID and the user's decision. I expect this will be replaced with login functionality in P3.
+ The data for the movies/drinks/meals I note above was seeded manually to my e28api for this project, though those three sites have their own free APIs.
+ For P3, I plan to allow the user to update their own selections as well. 
