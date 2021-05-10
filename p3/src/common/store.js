
import Vuex from 'vuex';


import { createLogger } from 'vuex';
import { axios } from '@/common/app.js';

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

const store = new Vuex.Store({
    plugins,
    state() {
        return {
            selections: [],
            // matches: []
            user:null,
        }
    },
    mutations: {
        setSelections(state, payload){
            state.selections = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        fetchSelections(context) {
            axios.get("selection").then((response) => {
                context.commit('setSelections',  response.data.selection);
            });
        },
        makeSelection(context){
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setSelections', response.data.user);
                    } else {
                        context.commit('setSelections', false);
                    }
    
                    resolve();
                });
            });
        },
        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setUser', response.data.user);
                    } else {
                        context.commit('setUser', false);
                    }
    
                    resolve();
                });
            });
        },
    },
    getters: {
        getSelectionById(state) {
            return function (id) {
                return state.selections.filter((selection) => {
                    return selection.id == id;
                }, id)[0];
            }
        },
        getSelectionByMovieId(state) {
            return function (id) {
                return state.selections.filter((selection) => {
                    return selection.movie_id == id;
                }, id)[0];
            }
        },
        getSelectionByUserId: (state) => (id) => {
                return state.selections.filter((selection) => {
                    return selection.user_id == id;
                }, id)[0];
            }
    }
})
export default store;