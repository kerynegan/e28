<template>
    <div id="account-page">
        <div v-if="user">
            <h2 data-test="welcome-message">Hi, {{ user.name }}!</h2>

            <a href="/selections" data-test='view-selections'>View my selections</a><br>
        

            <button v-on:click="logout" data-test="logout-button">Logout</button>
        </div>

        <div v-else id="loginForm">
            <h2>Login</h2>
            <div>
                <label>
                    Email:
                    <input type="text" v-model="data.email" data-test="email"/>
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" v-model="data.password" data-test="password" v-on:keyup.enter="login" />
                </label>
            </div>

            <button v-on:click="login" data-test="login-button">Login</button>
            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
            <p>Don't have an account yet? <a href="/register">Register here!</a></p>
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
                email: null,
                password: null,
            },
            errors: null,
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
    },
    watch: {
    },
    mounted(){
        this.user;
    }
};
</script>