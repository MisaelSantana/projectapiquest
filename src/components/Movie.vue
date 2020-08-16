<template>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="6" class= 'container'>
          <v-card>
          <v-card-title class="backgroundimg">{{movies.title}}</v-card-title>
            <v-card-text style="height: 300px;" class="lighten-5, align">{{movies.opening_crawl}}</v-card-text>
            <v-card-text class="backgroundimg" style="height: 100px; position: relative">{{movies.vehicles}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    <router-view></router-view>
  </v-container>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios';
	import VueAxios from 'vue-axios'
	Vue.use(VueAxios, axios)
	export default {
    props: {
      source: String,
    },
		data: () => ({
      movies: [],
      vehicles: []
    }),

    created () {
      this.getMovie ()
      console.log ('filmId')
    },

    methods: {
      getMovie() {
        this.select = null;
        axios.get('https://swapi.dev/api/films/'+this.$route.params.id)
        .then(response => {
            console.log (response.data);
            this. movies = response.data;
        })
        .catch(error => {
            console.log(error.response.data)
        });
      },
      viewFilms () {
        this.$router.push('/films')
      },
		}
	}
</script>

<style>
.backgroundimg {
  background-image: url(https://images7.alphacoders.com/901/901328.jpg);
  background-size: cover;
  background-position: center;
}
.align {
  display: flex;
  align-items: center;
}
</style>