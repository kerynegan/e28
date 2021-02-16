const weatherQuestion = {
    data(){
        return {
            weather: null,
            weatherTypes:[]
        }
    },
    methods: {
        addWeatherType() {
            this.weatherTypes.push(this.weather)
        }
    }
};

const app = Vue.createApp(weatherQuestion).mount('#weatherQuestion');