import { createApp } from 'vue'
import App from './App.vue'

// Import just the methods we need from the VueRouter module
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/pages/HomePage.vue';
import MoviesPage from '@/components/pages/MoviesPage.vue';
import DrinksPage from '@/components/pages/DrinksPage.vue';
import MealsPage from '@/components/pages/MealsPage.vue';
import MatchesPage from '@/components/pages/MatchesPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/movies', component: MoviesPage },
        { path: '/movies/:id', component: MoviesPage },
        { path: '/drinks', component: DrinksPage },
        { path: '/meals', component: MealsPage },
        { path: '/matches', component: MatchesPage },
    ]
})


createApp(App).use(router).mount('#app');
