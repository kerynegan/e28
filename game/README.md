## Week 2 Assignment - JavaScript Game

**Goal:** Create a game that plays against the computer to strategically subtract from a random total and not be the last one left standing.

**Features:**
- Player can input their own range, and the program will use Math functions to pick a relatively random number within that range.
- JavaScript writes to the page with DOM manipulation in several places.
- Player chooses via input button a value between 1 and 3 to subtract from the current total.
- The program will randomly choose a value between 1 and 3 to then subtract from the adjusted total.
- The program's choice waits to make its move after the player, on a Timeout for 1.5 seconds.
- Winner/loser announcements, and silly Easter eggs if the player tries to play a number before starting the game.
- After the game is over, player can reset the game using the start button (but not before unless they refresh the page, due to a gameStatus (0 is before the game, 1 is during, 2 is after win/loss)).

**JS Fiddle:**
- [https://jsfiddle.net/kerynegan/5dgobeua/](https://jsfiddle.net/kerynegan/5dgobeua/)