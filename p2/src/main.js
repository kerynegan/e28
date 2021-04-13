import { createApp } from 'vue'
import App from './App.vue'

// Import just the methods we need from the VueRouter module
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/pages/HomePage.vue';
import MoviesPage from '@/components/pages/MoviesPage.vue';
import DrinksPage from '@/components/pages/DrinksPage.vue';
import MealsPage from '@/components/pages/MealsPage.vue';
import MatchesPage from '@/components/pages/MatchesPage.vue';
import CreditsPage from '@/components/pages/CreditsPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/movies', component: MoviesPage },
        { path: '/movies/:id', component: MoviesPage, redirect: '/movies' },
        { path: '/drinks', component: DrinksPage },
        { path: '/meals', component: MealsPage },
        { path: '/matches', component: MatchesPage },
        { path: '/credits', component: CreditsPage },
    ]
})


createApp(App).use(router).mount('#app');
