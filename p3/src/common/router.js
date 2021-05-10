import { createRouter, createWebHistory } from 'vue-router';
import  store  from '@/common/store.js';

// Define all the routes of our application
const routes = [
    { path: '/', component: () => import('@/components/pages/HomePage.vue')},
    { path: '/movies', component: () => import('@/components/pages/MoviesPage.vue')},
    { path: '/movies/:id', component: () => import('@/components/pages/MoviePage.vue'), props:true  },
    { path: '/drinks', component: () => import('@/components/pages/DrinksPage.vue')},
    { path: '/drinks/:id', component: () => import('@/components/pages/DrinkPage.vue'), props:true  },
    { path: '/meals', component: () => import('@/components/pages/MealsPage.vue')},
    { path: '/meals/:id', component: () => import('@/components/pages/MealPage.vue'), props:true },
    { path: '/selections', name:'decisions', component: () => import('@/components/pages/SelectionsPage'),meta: { requiresAuth: true }},     
    { path: '/credits', component: () => import('@/components/pages/CreditsPage')},
    { path: '/account', name: 'account', component: () => import('@/components/pages/AccountPage')},
    { path: '/register', component: () => import('@/components/pages/RegisterPage')},
    { path: '/denied', component: () => import('@/components/pages/AccessDeniedPage.vue')},

];

// Initialize our router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// beforeEach provides a way to execute some code before a route is resolved
// Ref: https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to) => {

    // Exact the meta information from our routes
    // Ref: https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    // Put the “decide what to do” code into a method so we can wait to invoke it
    // once we have the user data
    const decide = (user) => {
        if (requiresAuth && !user) {
            // If they’re trying to access a requiresAuth route and they’re not logged in, 
            // they get sent to “Access Denied” page
            return '/denied';
        } else {
            // Otherwise, allow them to intended destination
            return true;
        }
    }

    // If we don’t have the user yet, dispatch our Vuex authUser action
    if (store.state.user === null) {
        // Observe how this code expects our authUser action to be asynchronous
        let authUser = await store.dispatch('authUser');
        if (authUser !== null) {
            return decide(store.state.user);
        }
    } else {
        return decide(store.state.user);
    }
});

export { router };