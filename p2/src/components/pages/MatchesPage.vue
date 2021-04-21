<template>
    <div id="selections-page">
        <h1>See all selections</h1>
        <table id="matches">
            <tr>
                <th>ID</th>
                <th>User</th>
                <th>Selection type</th>
                <th>Selection ID</th>
                <th>Decision</th>
            </tr>
<!--For now, I just want to show all of the selections. Once I have the user IDs/authenticaion in place, I'll filter on user ID and display matches with other users, as well as the details about the pick (movie title, meal picture, etc.) -->
            <tr class="show-selection" v-for="selection in selections" v-bind:key="selection.id" >
                <td>{{selection.id}}</td>
                <td>{{selection.user_id}}</td>
                <td v-if="selection.meal_id">Meal</td>
                <td v-else-if="selection.movie_id">Movie</td> 
                <td v-else-if="selection.drink_id">Drink</td>     
                <td v-if="selection.meal_id">Meal Number {{selection.meal_id}}</td>
                <td v-else-if="selection.movie_id">Movie Number {{selection.movie_id}}</td> 
                <td v-else-if="selection.drink_id">Drink Number {{selection.drink_id}}</td>                  
                <td v-if="selection.meal_id">{{selection.meal_decision}}</td>
                <td v-else-if="selection.movie_id">{{selection.movie_decision}}</td> 
                <td v-else-if="selection.drink_id"> {{selection.drink_decision}}</td>  
            </tr> 
        </table>
    </div>
</template>

<script>
export default {
    props: {
        selections: {
            type: Array,
            default: null,
        }
    },
    //whenever we step away to another page and make a new decision, we want to reload our selecitons.
    mounted() {
        this.updateSelections()
    },
    watch: {
        selections() {
            this.updateSelections();
        },
    },
    //reload selections
    methods: {
        updateSelections() {
            this.$emit("update-selections");
        },
    },

}
</script>

<style>
</style>