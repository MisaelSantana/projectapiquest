import Vue from 'vue';
import Router from 'vue-router';
import Movie from '../Movie'


Vue.use(Router)

const routes = [
    {name: 'movie', path: '/film/:id', component: Movie},
    // {name: 'movies', path: '/', component: Movie},
]

export const router = new Router({
    mode: 'history',
    routes: routes,
})