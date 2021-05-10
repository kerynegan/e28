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
            <button class="no" type="button" v-on:click="rejectDrink(drink.id)">NO</button>
            <button class="yes" type="button" v-on:click="selectDrink(drink.id)">YES</button>
            <transition name="fade">
                <div
                    class="alert"
                    v-show="showSelected"
                    data-test="show-selected"
                >
                    Your selection was noted.
                </div>
            </transition>
            <transition name="fade">
                <div
                    class="alert"
                    v-show="showRejected"
                    data-test="show-rejected"
                >
                    Your rejection was noted.
                </div>
            </transition>
        </div>
        <div class='full centered' v-else>
            <br>
            Please <a href="/account">log in or register</a> to add this to your list!
        </div>

    </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
    props: {
        drink: {
            type: Object,
        },
        
    },
    data() {
        return {
            data: {
                user_id: null,
                drink_id: null,
                drink_decision: null,
            },
            showSelected: false,
            showRejected: false,
            errors: null,
        };
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
        selectDrink(x) {
                axios.post("/selection", this.selection).then((response) => {
                    if (response.data.errors) {
                        this.errors = response.data.errors;
                        this.showSelected = false;
                    } else {
                        this.selection = {
                            user_id: this.user.id,
                            drink_id: x,
                            drink_decision: "selected",
                        };
                        this.showSelected = true;
                        setTimeout(() => (this.showSelected = false), 1000);
                    }
                });
              this.$emit('update-drink')
        },
        rejectDrink(x) {
                axios.post("/selection", this.selection).then((response) => {
                    if (response.data.errors) {
                        this.errors = response.data.errors;
                        this.showRejected = false;
                    } else {
                        this.selection = {
                            user_id: this.user.id,
                            drink_id: x,
                            drink_decision: "rejected",
                        };
                        this.showRejected = true;
                        setTimeout(() => (this.showRejected = false), 1000);
                    }
                });
              this.$emit('update-drink')
        },
    },
    mounted(){
        this.user;
    }

};
</script>

<style>
</style>