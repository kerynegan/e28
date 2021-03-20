const Game = {
    data() {
        return {
            playerName: '',
            minimumValue: 15,
            maximumValue: 25,
            randomNumber: '',
            currentNumber: '',
            selection: '',
            turn: 'player',
            choices: [],
            gameStarted: false,
            gameOver: false,
            errorAlert: '',
            alertClass: '',
            message: "Let's begin! Choose a number:",
            myInterval:'',
            gameCount: [],
            winner: '',
            
        }   
    },
    methods: {
        //alert if name field is left empty
        checkName() {
            if(this.playerName === '') {
                this.errorAlert = 'You must enter a name.';
            } 
        },
        //sets the first turn to the player's name, clears any error messages, and starts the game
        beginGame() {
            this.turn = this.playerName;
            this.errorAlert = '';
            this.gameStarted = true;
            this.getStartingNumber();
        },
        /*
        - Gets the starting randomNumber from the range provided by the player
        - Assigns that value to the currentNumber to start. 
        - If the numbers are the same, it just sets the randomNumber to the value. 
        - If the player submits a max that is lower than the min, this switches them.
        - The game then waits for the player to make a choice.
        */
        getStartingNumber() {
            this.maximumValue = Math.ceil(this.maximumValue);
            this.minimumValue = Math.floor(this.minimumValue);
            if (this.maximumValue < this.minimumValue) {
                var x = this.maximumValue;
                this.maximumValue = this.minimumValue
                this.minimumValue = x;
            };
            if (this.maximumValue === this.minimumValue) {
                this.randomNumber = this.maximumValue
            } else {
                var random = Math.random();
                var w = this.maximumValue - this.minimumValue + 1;
                this.randomNumber = Math.floor(random * w + this.minimumValue);
                }
            if (this.randomNumber <= 1) {
                this.errorAlert = "Oops, the random number is too low to play. Let's start again.";
                this.gameOver = true;
                this.alertClass = 'oops';
            }
            this.currentNumber = this.randomNumber;
        },
        /* 
        When either the player or the computer makes a move, 
        - an object is pushed to the choices array for the game tally (with selection + who played it)
        - the interval is cleared (so that the computer only makes one guess at a time)
        - if the player forgets to choose a number before hitting submit, it calls an errorAlert message.
        */
        makeSelection() {
            if(this.selection != 0) {
                this.errorAlert = '';
                clearInterval(this.myInterval);
                var obj = {
                    who: this.turn, 
                    what: this.selection
                };
                this.choices.push(obj);
                this.checkCount();
            } else {
                this.alertClass = "oops";
                this.errorAlert = 'You must choose a number first.';
            }
        },
        //Checks whether the game is over. If yes, calls alerts. If not, changes turn.
        checkCount() {
            this.currentNumber -= this.selection;
            this.selection = '';
            if (this.currentNumber === 1) {
                this.gameOver = true;
                if (this.turn == this.playerName) {
                    this.message = 'The computer is stuck. You win!';
                    this.winner = this.playerName;
                } else if (this.turn == 'The computer') {
                    this.message = "Ugh, you're stuck! You lose!";
                    this.winner = "The Computer";
                }
                this.alertGame();
            } else if (this.currentNumber < 1) {
                //could have combined these, but thought the sassy messaging around 'bad moves' was worth keeping from my week 2 project.
                this.gameOver = true;
                if (this.turn == this.playerName) {
                    this.message = "Oops, that was a bad move. You lose!";
                    this.winner = "The Computer";
                } else if (this.turn == 'The computer') {
                    this.message = 'The computer made a bad move. You win!';
                    this.winner = this.playerName;
                }
                this.alertGame();
            } else if (this.currentNumber > 1) {
                this.changeTurn();
            }
        },
        //Changes the turn and updates a message to player.
        //Thanks to Susan for help with the setInterval arror functionality.
        changeTurn() {
            if (this.turn == this.playerName) {
                this.message = 'The computer is thinking...'
                this.turn = 'The computer';
                this.myInterval = setInterval(() => { this.computerTurn(); }, 1500); 
            } else {
                this.message = 'Your turn! Play a number:'
                this.turn = this.playerName;
            }
        },
        /*
        The computer randomly plays a number. 
        - If the current number is > 3, it plays 1-3; 
        - If the current number is < 3, it plays 1 or 2. 
        (remember, game ends if current number <= 1)
        */
        computerTurn() {
            var rand = Math.random();
            if(this.currentNumber > 3) {
                this.selection = Math.floor(rand * 3 + 1);
            } else if(this.currentNumber <= 3){
                this.selection = Math.floor(rand * 2 + 1);
            }
            this.makeSelection();
        },
        //Once the game is over, pushes relevant stats from the game to a gameHistory array for display.
        addToHistory() {
            var obj = {
                start: this.randomNumber,
                minimum: this.minimumValue,
                maximum: this.maximumValue,
                winner: this.winner, 
            }
            this.gameCount.push(obj);
        },
        //messaging around game wins/loss.
        alertGame() {
            if (this.winner == this.playerName) {
                this.alertClass = 'winner';
            } else {
                this.alertClass = 'loser';
            }
            this.errorAlert = this.message;
            this.addToHistory();
        },
        //resets game attributes to beginning states. Purposely skips the player's name, assuming the same player.
        resetGame(x) {
            this.randomNumber = '';
            this.currentNumber = '';
            this.selection = '';
            this.turn = 'player';
            this.choices = [];
            this.gameStarted = false;
            this.gameOver = false;
            this.errorAlert = '';
            this.alertClass = '';
            this.message = "Let's play again! Choose a number:";
            this.winner = '';
            if (x === 'new') {
                this.playerName = '';
            };
            if (x === 'all') {
                this.playerName = '';
                this.gameCount.length = 0;
            };
        },
        deleteHistory(x) {
            this.gameCount = this.gameCount.filter((game) => this.gameCount.indexOf(game) != x);

        },
    }

}

const GameHistory = {
    name: 'GameHistory',
    props: ['round', 'start', 'minimum', 'maximum', 'winner'],
    data() {
        return {
            deleted: false,
        }
    },
    methods: {

    },
    template: '#game-history'
}

const app = Vue.createApp(Game);
app.component('game-history', GameHistory);
app.mount('#app');