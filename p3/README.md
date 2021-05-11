
# Project 3
+ By: Keryn Egan
+ Production URL: <http://e28p3.kerynegan.me>

## Outside resources
### p3 specific:
+ [VueX 3 vs VueX 4 problem for CreateStore](https://stackoverflow.com/questions/64965307/getting-export-createstore-was-not-found-in-vuex-warning)
+ [CSS grid styling for decision page](https://codepen.io/danield770/pen/ERajZr)
+ [CSS styling for red X through rejected images on decision page](https://stackoverflow.com/questions/21956790/css-cross-through-an-element)
+ [Press enter to submit login or registration forms](https://vuejs.org/v2/guide/events.html#Key-Modifiers)

### I think it's important to reiterate these resources from p2, though they're noted on my credits page:
+ All movie data is from [The Movie Database](https://www.themoviedb.org/).
+ All meal data is from [Spoonacular](https://spoonacular.com/).
+ All drink data is from [the Cocktails Database](https://www.thecocktaildb.com/).


## Notes for instructor
This doesn't quite do what I was envisioning yet! I still had hopes to:

+ allow users to match with their friends and find common selections
+ allow users to update their selections (change selected to rejected, etc.),
+ and give some indication on the individual movies page that the user had already selected/rejected the movie

but unfortunately I just ran out of time. 

If I had had another two-three weeks I think I would have gotten the project there. 
Overall though, I feel ok about where it ended up! And I learned a ton.

## How is authentication being used in your application?
+ Only authenticated users can see their own selections (from the link on their /account page).
+ On the movies, meals, and drinks pages, authenticated users can see the buttons to make their selections. (Others who are not authenticated would see a link to login or register instead of those buttons.)
+ Authenticated users have their specific user.id passed to the selections table when they use their buttons.

## What data entities of your application are being managed via Vuex?
+ User
+ Selections

## E2E Testing screenshot
![P3 passing E2E tests](p3/src/assets/images/Screenshot-e2etest-kerynegan.png)

