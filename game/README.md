## Week 2 Assignment - JavaScript Game

**Goal:** Create a game that plays against the computer to strategically subtract from a random total and not be the last one left standing.

**Features:**
- Player can input their own range, and the program will use Math functions to pick a relatively random number within that range.
- JavaScript writes to the page with DOM manipulation in several places.
- Player chooses via input button a value between 1 and 3 to subtract from the current total.
- The program will randomly choose a value between 1 and 3 to then subtract from the adjusted total (Exception: if the game is down to 3 or less, the program will choose between 1 and 2, not 1 and 3.)
- The program's choice waits to make its move after the player, on a time interval of 1.5 seconds.
- Winner/loser announcements, and silly Easter eggs if the player tries to play a number before starting the game or makes a bad move at the end.
- After the game is over, player can reset the game using the start button (but not before unless they refresh the page, due to a gameStatus).

**JS Fiddle:**
- [https://jsfiddle.net/kerynegan/5dgobeua/](https://jsfiddle.net/kerynegan/5dgobeua/)