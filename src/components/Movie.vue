<template>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="6" class= 'container'>
          <v-card>
          <v-card-title>{{movies.title}}</v-card-title>
            <v-card-text  style="height: 300px;" class="grey lighten-5, lettercolor">{{movies.opening_crawl}}</v-card-text>
            <v-card-text style="height: 100px; position: relative">{{movies.vehicles}}
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
      movies: []
    }),

    created () {
      this.getMovie()
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
.lettercolor {
  color: ;
}
</style>