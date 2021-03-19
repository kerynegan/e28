const Game = {
    data() {
        return {
            playerName: '',
            minimumValue: 25,
            maximumValue: 100,
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
        checkName() {
            if(this.playerName === '') {
                this.errorAlert = "You must enter a name.";
            } 
            
        },
        beginGame() {
            this.turn = this.playerName;
            this.errorAlert = '';
            this.gameStarted = true;
            this.getStartingNumber();
        },
        getStartingNumber() {
            this.maximumValue = Math.ceil(this.maximumValue);
            this.minimumValue = Math.floor(this.minimumValue);
            if (this.maximumValue < this.minimumValue) {
                var x = this.maximumValue;
                this.maximumValue = this.minimumValue
                this.minimumValue = x;
            };
            var random = Math.random();
            var w = this.maximumValue - this.minimumValue + 1;
            this.randomNumber = Math.floor(random * w + this.minimumValue);
            if (this.randomNumber <= 1) {
                this.message = "Oops, the random number is too low to play. Let's start again."
                this.gameOver = true;
            }
            this.currentNumber = this.randomNumber;
        },
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