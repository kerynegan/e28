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
        <div class='full centered' v-if="user && mealspage" >
            <h3>Interested in this meal?:</h3>
            <button class="no" type="button" v-on:click="rejectMeal(meal.id)">NO</button>
            <button class="yes" type="button" v-on:click="selectMeal(meal.id)">YES</button>
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
        <div class='full centered' v-else-if="user && !mealspage">
            <br>
            Want to view other meals? <a href="/meals">See our meals page.</a>
        </div>
        <div class='full centered' v-else-if="!user">
            <br>
            Please <a href="/account">log in or register</a> to add this to your list!
        </div>
    </div>
</template>

<script>
import { axios } from "@/common/app.js";
export default {
    props: {
        meal: {
            type: Object,
        },
        mealspage: {
            type: Boolean,
        }
    },
    data() {
        return {
            data: {
                user_id: null,
                meal_id: null,
                meal_decision: null,
            },
            showSelected: false,
            showRejected: false,
            errors: null,
        };
    },
    computed: {
        imgSrc() {
            try {
                return require("@/assets/images/meals/" + this.meal.id + ".jpg");
            } catch (e) {
                return require("@/assets/images/meals/example.jpg");
            }
        },
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        selectMeal(x) {
                axios.post("/selection", 
                    this.selection = {
                        user_id: this.user.id,
                        meal_id: x,
                        meal_decision: "selected",
                    }).then(() => {
                        this.showSelected = true;
                        setTimeout(() => (this.showSelected = false), 1000);
                        this.$emit('update-meal')
                    }
                );

        },
        rejectMeal(x) {
                axios.post("/selection", 
                    this.selection = {
                        user_id: this.user.id,
                        meal_id: x,
                        meal_decision: "rejected",
                    }).then(() => {
                        this.showRejected = true;
                        setTimeout(() => (this.showRejected = false), 1000);
                        this.$emit('update-meal')
                    }
                );
        },
    },
    mounted(){
        this.user;
    }
};
</script>

<style>
</style>