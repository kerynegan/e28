//pong.js

var myCanvas, paddles, ball, startButton;
let gameStatus = 0;

myCanvas = document.getElementById("pongCanvas");
startButton = document.getElementById("startBtn");

function startGame(){

	if (gameStatus === 0) {
		var txt = myCanvas.getContext("2d");
		txt.font = "15px Arial"
		txt.textAlign = "center";
		txt.fillText("Are you ready?", myCanvas.width/2, myCanvas.height/2);
	}
	else if (gameStatus === 1){
		var txt = myCanvas.getContext("2d");
		txt.clearRect(0,0,myCanvas.width, myCanvas.height);
	}


}

startButton.onclick = myFunction;

function myFunction() {
  if (gameStatus === 0) { //if any key is pressed before the game begins
    gameStatus = 1; //start the game.
    startGame();
  }

}

function gameOver(){
	var txt = myCanvas.getContext("2d");
	txt.clearRect(0,0,myCanvas.width, myCanvas.height);
	txt.font = "15px Arial";
	txt.textAlign = "center";
	txt.fillText("GAME OVER. Play again?", myCanvas.width/2, myCanvas.height/2);
}

startGame();
