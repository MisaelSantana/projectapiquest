import Vue from 'vue';
import Router from 'vue-router';
import Movie from '../Movie'
import Movies from '../Movies'
import People from '../People'
import Person from '../Person'
import Aircraft from '../Aircraft'
import Aircrafts from '../Aircrafts'
import Vehicle from '../Vehicle'
import Vehicles from '../Vehicles'
import Specie from '../Specie'
import Species from '../Species'
import Planet from '../Planet'
import Planets from '../Planets'

Vue.use(Router)

const routes = [
    {name: 'movie', path: '/film/:id', component: Movie},
    {name: 'movies', path: '/films', component: Movies},
    {name: 'person', path: '/person/:id', component: Person},
    {name: 'people', path: '/people', component: People},
    {name: 'aircraft', path: '/aircraft/:id', component: Aircraft},
    {name: 'aircrafts', path: '/aircrafts', component: Aircrafts},
    {name: 'vehicle', path: '/vehicle/:id', component: Vehicle},
    {name: 'vehicles', path: '/vehicles', component: Vehicles},
    {name: 'specie', path: '/specie/:id', component: Specie},
    {name: 'species', path: '/species', component: Species},
    {name: 'planet', path: '/planet/:id', component: Planet},
    {name: 'planets', path: '/planets', component: Planets},
    {name: 'home', path: '/'},
]

export const router = new Router({
    mode: 'history',
    routes: routes,
});
