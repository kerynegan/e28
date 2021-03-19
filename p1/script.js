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
            gamemessage: '',
            errorAlert: '',
            message: "Let's begin! Choose a number:",
            myInterval:'',
            
        }   
    },
    methods: {
        //alert if name field is left empty
        checkName() {
            if(this.playerName === '') {
                this.errorAlert = "You must enter a name.";
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
                if (this.randomNumber <= 1) {
                    this.message = "Oops, the random number is too low to play. Let's start again."
                    this.gameOver = true;
                }
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
                this.errorAlert = 'You must choose a number first.';
            }
        },
        //Checks whether the game is over. If yes, calls alert. If not, changes turn.
        checkCount() {
            this.currentNumber -= this.selection;
            this.selection = '';
            if (this.currentNumber <= 1) {
                if (this.turn == "player") {
                    this.message = "The computer is stuck.";
                    this.alertGame("Winner");
                } else if (this.turn == "The computer") {
                    this.message = "Ugh, you're stuck!";
                    this.alertGame("Loser");
                }
            this.gameOver = true;
            } else if (this.currentNumber > 1) {
                this.changeTurn();
            }
        },
        //Changes the turn and updates a message to player.
        changeTurn() {
            if (this.turn == this.playerName) {
                this.message = "The computer is thinking..."
                this.turn = "The computer";
                this.myInterval = setInterval(function () { app.computerTurn(); }, 1500);
            } else {
                this.message = "Your turn! Play a number:"
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
        alertGame(x) {

        }
        
    }

}

const app = Vue.createApp(Game).mount('#app');