<template>
    <div id="register-page">
        <div v-if="user">
            <h2>Hi, {{ user.name }}!</h2>

            You are already registered! Would you like to create a new account?<br>
            Log out first:
            <button v-on:click="logout">Logout</button>
        </div>

        <div v-else id="registerForm">
            <h2>Register</h2>
             <div>
                <label>
                    Name:
                    <input type="text" v-model="data.name" />
                </label>
            </div>           
            <div>
                <label>
                    Email:
                    <input type="text" v-model="data.email" />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" v-model="data.password" />
                </label>
            </div>

            <button v-on:click="register">Register</button>

            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
    data() {
        return {
            // Form is prefilled for demonstration purposes; remove in final application
            // jill@harvard.edu/asdfasdf is one of our seed users from e28api/seeds/user.json
            data: {
                name:null,
                email: null,
                password: null,
            },
            errors: null,
            success: null,
            favorites: [],
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        login() {
            axios.post("login", this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit("setUser", response.data.user);

                } else {
                    this.errors = response.data.errors;
                }
            });
        },
        logout() {
            axios.post("logout").then((response) => {
                if (response.data.success) {
                    this.$store.commit("setUser", null);
                }
            });
        },
        register() {
            axios.post("register", this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit("setUser", response.data.user);
                } else {
                    this.errors = response.data.errors;
                }
            });
            if(!this.errors){
                this.$router.push({ path: 'account' });
            }
        },
    },
    watch: {
    },
};
</script>