<template>
    <div>
        <h2>Add a Product</h2>

        <div id="inputs">
            <label for="name">Name</label>
            <input type="text" v-model="product.name" id="name" />

            <label for="sku">SKU:</label>
            <input type="text" v-model="product.sku" id="sku" />

            <label for="price">Price:</label>
            <input type="text" v-model="product.price" id="price" />

            <label for="available">Quantity available:</label>
            <input type="text" v-model="product.available" id="available" />

            <label for="weight">Weight (in lbs):</label>
            <input type="text" v-model="product.weight" id="weight" />

            <label for="perishable" class="form-checkbox-label">
                <input
                    type="checkbox"
                    v-model="product.perishable"
                    id="perishable"
                />
                Perishable?
            </label>

            <label for="description">Description</label>
            <textarea v-model="product.description" id="description"></textarea>
        </div>

        <button v-on:click="addProduct">Add Product</button>

        <div v-if="showConfirmation">Your product was added</div>

        <p v-if="errors">
            <b>Oops, looks like something went wrong:</b>
            <ul>
            <li v-bind:key="error" v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
    </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
    data() {
        return {
            showConfirmation: false,
            errors: null,
            product: {},
        };
    },
    methods: {
        addProduct() {
            axios.post("/product", this.product).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    this.showConfirmation = false;
                } else {
                    this.$emit("update-products");
                    this.showConfirmation = true;
                    this.errors = false;
                }
            });
        },
    },
};
</script>

<style scoped>
#inputs {
    text-align: left;
}
</style>