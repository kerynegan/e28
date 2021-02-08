//game.js

var oneB, twoB, threeB, startButton, reStart, goalNumber, computerNumber, turn, myInterval;//variables for gameplay buttons, start button, goal number
var min, max;

var randomNumber = document.getElementById("randomNumber"); //h2 in HTML that displays goal number
var gameAlert = document.getElementById("gameAlert");
var playerChoice = document.getElementById("playerChoice");
var computerChoice = document.getElementById("computerChoice");

let gameStatus = 0; //starting status is 0
startButton = document.getElementById("startBtn"); //get the startButton

oneB = document.getElementById("oneBtn");
twoB = document.getElementById("twoBtn");
threeB = document.getElementById("threeBtn");


function setUp() { //before the game starts, display directions.

	if (gameStatus === 0) {
		randomNumber.innerHTML = "Click Start button to begin.";
		oneB.onclick = function () { alertTheGame("silly") };
		twoB.onclick = function () { alertTheGame("buddy") };
		threeB.onclick = function () { alertTheGame("pal") };
		turn = 0;
		startButton.onclick = function () { startGame() }; //if clicked, start the game
	}
	if (gameStatus === 2) {


	}

}

function startGame() { //function for game start
	if (gameStatus === 0) { //while game status = 0
		gameAlert.innerHTML = "";
		gameStatus = 1; //set the game status to 1.
		var n = document.getElementById("miniValue").value; //get the minimum value
		if (n == 0) { //if the user does not enter a number
			min = 25; //set minimum value to 25
		} else { // else use the minimum value
			min = n;
		}
		min = Number(min);
		var m = document.getElementById("maxiValue").value; //get the maximum value
		if (m == 0) { //if the user does not enter a number for maximum value
			max = 100; //set the max to 100
		} else { //else use the max
			max = m;
		}
		max = Number(max);
		if (max < min) { //if the player inputs a min that is larger than the max, switch their values
			var temp = max;
			max = min;
			min = temp;
		}
		console.log(min, max);
		min = Math.floor(min);
		max = Math.ceil(max);
		randomizeGoal(min, max) //call the randomize function
	}

}

function randomizeGoal(x, y) { //source for function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	var rand = Math.random(); //choose a random number between 0 and 1
	var z = y - x + 1; //I already have integers, so subtract the min from the max, and add 1 to be inclusive of the maximum
	var goalNumber = Math.floor(rand * z + x)
	randomNumber.innerHTML = "Your Random Number is: " + goalNumber;
	checkGoal(goalNumber, turn);
}

function computerTurn(x, y, goalNumber, turn) { //source for function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	var rand = Math.random(); //choose a random number between 0 and 1
	var z = y - x + 1; //I already have integers, so subtract the min from the max, and add 1 to be inclusive of the maximum
	computerNumber = Math.floor(rand * z + x)
	gamePlay(goalNumber, turn, computerNumber)
}

function checkGoal(goalNumber, turn) {
	if (goalNumber <= 1) {
		if (turn === 0) {
			computerChoice.innerHTML = "";
			alertTheGame("youLose");
		} else if (turn === 1) {
			computerChoice.innerHTML = "";
			alertTheGame("youWin");
		}
		gameStatus = 2;
		startButton.onclick = function () { resetGame() }; //if clicked, start the game
	} else if (goalNumber > 1) {
		if (turn === 0) {
			oneB.onclick = function () { gamePlay(goalNumber, turn, 1) };
			twoB.onclick = function () { gamePlay(goalNumber, turn, 2) };
			threeB.onclick = function () { gamePlay(goalNumber, turn, 3) };
		}
		if (turn === 1) {
			myInterval = setInterval(function () { computerTurn(1, 3, goalNumber, turn); }, 1500);
		}
	}
}

function gamePlay(goalNumber, turn, x) {
	clearInterval(myInterval);
	if (turn === 0) {
		goalNumber -= x;
		playerChoice.innerHTML = "You chose " + x + "!";
		randomNumber.innerHTML = "Your Random Number is now: " + goalNumber;
		computerChoice.innerHTML = "The computer is thinking...";
		turn = 1;
		console.log(goalNumber + " second");
		checkGoal(goalNumber, turn);
	} else if (turn === 1) {
		goalNumber -= x;
		playerChoice.innerHTML = "The computer chose: " + x + "!";
		randomNumber.innerHTML = "Your Random Number is now: " + goalNumber;
		computerChoice.innerHTML = "It's your turn!";
		turn = 0;
		console.log(goalNumber + "third");
		checkGoal(goalNumber, turn);

	}
}

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
	if (x === "youWin") {
		gameAlert.innerHTML = "Game over! You won! <br> Press Start to play again!";
	}
	gameStatus = 0;
}

function goalSubtract(goal, x) {
	console.log(typeof goal, typeof x);
	goal -= x;
	goalNumber = goal
	return goalNumber;
}

function resetGame() {
	gameAlert.innerHTML = "";
	gameStatus = 0;
	playerChoice.innerHTML = "";
	computerChoice.innerHTML = "";
	setUp();
}

setUp();
