<template>
    <div class="show-drink">
        <!-- This class is just display functionality for the CSS grid-->
        <div class="split left">
            <img v-bind:src="imgSrc" />
        </div>
        <!-- This class is just display functionality for the CSS grid-->
        <div class="split right">
            <h2 class="title">{{ drink.name }}</h2>
            <p class="notes"><span class="rating">Served in: {{ drink.glass }}</span></p>
            <!-- Ingredients and Instructions are comma-separated strings. This displays them with a nicer comma + space-->
            <span class="director"><strong>Ingredients:</strong> {{ drink.ingredients.split(',').join(", ") }}</span><br />
            <p><strong>Instructions:</strong> {{ drink.instructions.split(',').join(", ") }}</p>
            <p class="url"><a v-bind:href="drink.cocktailDB_url" target="_blank">View more details at The Cocktail Database</a><br>(opens in new window)</p>
        </div>
        <div class='full centered' v-if="user">
            <h3>Interested in this drink?:</h3>
            <button class="no" type="button" v-on:click="decision(drink.id, 'rejected')">NO</button>
            <button class="yes" type="button" v-on:click="decision(drink.id, 'selected')">YES</button>
        </div>
        <div class='full centered' v-else>
            <br>
            Please <a href="/account">log in or register</a> to add this to your list!
        </div>
    </div>
</template>

<script>
export default {
    props: {
        drink: {
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
                return require("@/assets/images/drinks/" + this.drink.id + ".jpg");
            } catch (e) {
                return require("@/assets/images/drinks/example.jpg");
            }
        },
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        //if user, via the buttons above, makes decision about the drink, pass it to the parent DrinksPage
        decision(x,y) {
            if(y == "selected") {
                this.$emit('select-drink', x)
            } else if (y =="rejected")
                this.$emit('reject-drink', x)
        },
    }

};
</script>

<style>
</style>