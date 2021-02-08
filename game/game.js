//game.js

//gameplay variables for computer's selection and a time Interval variable between player and computers turns.
var computerNumber, myInterval;
//variables for goal, and range's min and max 
var goalNumber, min, max; 

//variables for HTML elements that are updated by functions.
var randomNumber = document.getElementById("randomNumber"); //h2 in HTML that displays goal number
var playerChoice = document.getElementById("playerChoice"); //first gameplay paragraph tag
var computerChoice = document.getElementById("computerChoice"); //second gameplay paragraph tag 
var gameAlert = document.getElementById("gameAlert"); //alert paragraph tag 
var startButton = document.getElementById("startBtn"); //get the startButton
var oneB = document.getElementById("oneBtn"); //get player button 1
var twoB = document.getElementById("twoBtn"); //get player button 2
var threeB = document.getElementById("threeBtn"); //get player button 3

//starting game status is 0 (game has not begun)
var gameStatus = 0; 
//starting turn status is 0 (player's turn first)
var turn = 0;

//setup function for before game begins
function setUp() { 
	if (gameStatus === 0) {	
	//HTML that updates with the directions.
		randomNumber.innerHTML = "Click Start button to begin.";
		startButton.innerHTML = "Start the game."
	//three on click functions for when the player's buttons are selected before the game is started.
		oneB.onclick = function () { alertTheGame("silly") };
		twoB.onclick = function () { alertTheGame("buddy") };
		threeB.onclick = function () { alertTheGame("pal") };
	//if clicked, start the game
		startButton.onclick = function () { startGame() }; 
	}
}

//function for game start
function startGame() { 
	if (gameStatus === 0) { //while game status = 0 (before game has begun)
		gameAlert.innerHTML = ""; //clear the alert paragraph, if any content (see button onclicks in setUp function)
		gameStatus = 1; //set the game status to 1 (game has begun)
	//set the range minimum
		var n = document.getElementById("miniValue").value; //get the minimum value
		if (n == 0) { //if the user does not enter a number
			min = 25; //set minimum value to 25
		} else { // else use the minimum value
			min = n;
		}
		min = Number(min); //make sure it's a number

	// set the range maximum
		var m = document.getElementById("maxiValue").value; //get the maximum value
		if (m == 0) { //if the user does not enter a number for maximum value
			max = 100; //set the max to 100
		} else { //else use the max
			max = m;
		}
		max = Number(max); //make sure it's a number

	//if the player inputs a min that is larger than the max, swap their values
		if (max < min) { 
			var temp = max;
			max = min;
			min = temp;
		}		
	//round down the min and up the max if user does not provide integers.
		min = Math.floor(min);
		max = Math.ceil(max);

	//call the randomize function to pick a goalNumber for the game.
		randomizeGoal(min, max)
	}
}
//main source for function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomizeGoal(x, y) { //x = min and y = max
	var rand = Math.random(); //choose a random number between 0 and 1
	var z = y - x + 1; //I already have integers, so subtract the min from the max, and add 1 to be inclusive of the maximum
	var goalNumber = Math.floor(rand * z + x) //calculate the goal, and round it down.
	randomNumber.innerHTML = "Your Random Number is: " + goalNumber; //display the number.
	checkGoal(goalNumber, turn); //check the number to see if the game is over.
}

function computerTurn(x, y, goalNumber, turn) { //source for function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	if(goalNumber > 3) {
		var rand = Math.random(); //choose a random number between 0 and 1
		var z = y - x + 1; //I already have integers, so subtract the min from the max, and add 1 to be inclusive of the maximum
		computerNumber = Math.floor(rand * z + x)
	//if we're down to 3 or less, the computer can only pick between 1 and 2.
	} else if (goalNumber <= 3) {
		x = 1;
		y = 2;
		var rand = Math.random(); //choose a random number between 0 and 1
		var z = y - x + 1; //I already have integers, so subtract the min from the max, and add 1 to be inclusive of the maximum
		computerNumber = Math.floor(rand * z + x)
	}
	gamePlay(goalNumber, turn, computerNumber)
}
//checks to see if the game is over.
function checkGoal(goalNumber, turn) {
	//if the goalNumber is at 1 or less, the game is over.
	if (goalNumber <= 1) {
	//if it's the player's turn.
		if (turn === 0) { 
			computerChoice.innerHTML = "Ugh, you're stuck!"; 
			alertTheGame("youLose"); //display message that the player lost
	//if it's the computer's turn	
		} else if (turn === 1) { 
			computerChoice.innerHTML = "The computer is stuck.";
			alertTheGame("youWin"); //display message that the player won.
		}
	//set the game status to over.
		gameStatus = 2; 
	//update HTML of start button to reset.
		startButton.innerHTML = "Reset the game"
	//if clicked, restart the game (instructions to reset are in the win/lose messages)
		startButton.onclick = function () { resetGame() }; 
	
		//else, if the goal number is more than 1, the game continues.
	} else if (goalNumber > 1) {
		//if it's the player's turn, wait for a button press.
		if (turn === 0) { 
		//if the player makes a stupid move when the goalNumber is at exactly 2 or 3, point out how dumb that move was.
			if (goalNumber === 2) {
				oneB.onclick = function () { gamePlay(goalNumber, turn, 1) };
				twoB.onclick = function () { alertTheGame("youLoseWhy") };
				threeB.onclick = function () { alertTheGame("youLoseWhy") };
			} else if (goalNumber === 3) {
				oneB.onclick = function () { gamePlay(goalNumber, turn, 1) };
				twoB.onclick = function () { gamePlay(goalNumber, turn, 2) };
				threeB.onclick = function () { alertTheGame("youLoseWhy") };		
		//else, let them make their move and call the gamePlay function with their selection.
			} else {
				oneB.onclick = function () { gamePlay(goalNumber, turn, 1) };
				twoB.onclick = function () { gamePlay(goalNumber, turn, 2) };
				threeB.onclick = function () { gamePlay(goalNumber, turn, 3) };
			}
	//if it's the computer's turn, set an interval of 1.5 seconds, then call the function for the computer's selection.
		} else if (turn === 1) { //else, if it's the computer's turn, 
			myInterval = setInterval(function () { computerTurn(1, 3, goalNumber, turn); }, 1500);
		}
	}
}
//function for game selections.
function gamePlay(goalNumber, turn, x) {
//clear the time interval so that the computer doesn't keep making selections every 1.5 seconds.
	clearInterval(myInterval);
//if it's the player's turn.
	if (turn === 0) {
	//subtract their selection from the goalNumber
		goalNumber -= x;
	//update the HTML with messages.
		playerChoice.innerHTML = "You chose " + x + "!";
		randomNumber.innerHTML = "Your Random Number is now: " + goalNumber;
		computerChoice.innerHTML = "The computer is thinking...";
	//change the turn to the computer
		turn = 1;
		console.log("After your choice, the goal is now " + goalNumber);
	//check if the game is oer.
		checkGoal(goalNumber, turn);
	} else if (turn === 1) {
		goalNumber -= x;
		playerChoice.innerHTML = "The computer chose: " + x + "!";
		randomNumber.innerHTML = "Your Random Number is now: " + goalNumber;
		computerChoice.innerHTML = "It's your turn!";
	//change the turn to the player
		turn = 0;
		console.log("After the computer's choice, the goal is now " + goalNumber);
	//check if the game is over.
		checkGoal(goalNumber, turn);
	}
}
//game alerts called by various buttons.
function alertTheGame(x) {
	if (x === "silly") {
		gameAlert.innerHTML = "You have to start the game first, silly!";
	}
	if (x === "buddy") {
		gameAlert.innerHTML = "You have to start the game first, buddy!";
	}
	if (x === "pal") {
		gameAlert.innerHTML = "You have to start the game first, pal!";
	}
	if (x === "youLose") {
		gameAlert.innerHTML = "Game over! You lose! <br> Press Start to play again!";
	}
	if (x === "youLoseWhy") {
	//we skip the checkGoal function on this call, so set the gameStatus to 2/game over.
		gameStatus = 2; 
	//update HTML of start button to reset.
		startButton.innerHTML = "Reset the game"
	//if clicked, restart the game (instructions to reset are in the win/lose messages)
		startButton.onclick = function () { resetGame() }; 

		computerChoice.innerHTML = "No! Why on earth would you make THAT move?";
		gameAlert.innerHTML = "Game over! You lose! <br> Press Start to play again!";
	}
	if (x === "youWin") {
		gameAlert.innerHTML = "Game over! You won! <br> Press Start to play again!";
	}
}
//quick function to reset the game, messages, and recall the setUp function.
function resetGame() {
	gameAlert.innerHTML = "";
	gameStatus = 0;
	playerChoice.innerHTML = "";
	computerChoice.innerHTML = "";
	setUp();
}
//initial call of the setUp function
setUp();
