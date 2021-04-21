<template>
    <div class="show-meal">
        <div class="split left">
            <img v-bind:src="imgSrc" />
        </div>
        <div class="split right">
            <h2 class="title">{{ meal.name }}</h2>
            <p class="notes">
                <span class="rating">Total Time: {{ meal.total_time }} minutes</span> 
                <span class="serving">Serving Size: {{ meal.serving_size }}</span> 
            </p>
            <p class="synopsis">{{ meal.description }}</p>   
            <!-- Categories and Keywords are comma-separated strings. This displays them with a nicer comma + space-->
            <p><strong>Categories:</strong> {{ meal.category.split(',').join(", ") }}</p>
            <p><strong>Keywords:</strong> {{ meal.keywords.split(',').join(", ") }}</p>
            <p class="url"><a v-bind:href="meal.spoonacular_url" target="_blank">View more details at Spoonacular</a><br>(opens in new window)</p>
        </div>
        <div class='full centered'>
            <h3>Interested in this meal?:</h3>
            <button class="no" type="button" v-on:click="decision(meal.id, 'rejected')">NO</button>
            <button class="yes" type="button" v-on:click="decision(meal.id, 'selected')">YES</button>
        </div> 
    </div>
</template>

<script>
export default {
    props: {
        meal: {
            type: Object,
        },
        showConfirmation: {
            type: Boolean,
            default:false
        },
    },
    computed: {
        imgSrc() {
            try {
                return require("@/assets/images/meals/" + this.meal.id + ".jpg");
            } catch (e) {
                return require("@/assets/images/meals/example.jpg");
            }
        },
        
    },
    methods: {
        //if user, via the buttons above, makes decision about the meal, pass it to the parent MealsPage
        decision(x,y) {
            if(y == "selected") {
                this.$emit('select-meal', x)
            } else if (y =="rejected")
                this.$emit('reject-meal', x)
        },
    }

};
</script>

<style>
</style>