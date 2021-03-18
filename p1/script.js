const Game = {
    data() {
        return {
            playerName: '',
            minimumValue: 25,
            maximumValue: 100,
            randomNumber: 55,
            currentNumber: 54,
            playerSelection: '',
            computerSelection: '',
            turn: 'Player',
            choices: [],
            gameStarted: false,
            gameOver: false
            
        }   
    },
    methods: {
        beginGame() {
            this.gameStarted = true;
        },
        makeSelection() {
            this.choices.push(Number(this.playerSelection));
        }
        
    }

}

const app = Vue.createApp(Game).mount('#app');