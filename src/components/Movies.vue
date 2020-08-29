<template>
<v-data-table
    :headers="headers"
    :items="movies"
    class="elevation-1 table, center"
><template v-slot:item.actions="{ item }">
        <v-icon
        small
        class="mr-2"
        @click="viewMovie(item)"
        >
        mdi-information
        </v-icon>
    </template>
</v-data-table>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios';
  import VueAxios from 'vue-axios'
  Vue.use(VueAxios, axios)
  export default {
    data: () => ({
      title:(''),
      headers: [{ text: 'Title', value: 'title' },
        { text: 'Episode', value: 'episode_id' },
        { text: 'Director', value: 'director' },
        { text: 'Producer', value: 'producer' },
        { text: 'Release date', value: 'release_date' },
        { text: 'Actions', value: 'actions', sortable: false }],
      movies: []
    }),
    created () {
      this.getMovies ()
    },
    methods: {
      getMovies() {
        axios.get('https://swapi.dev/api/films/')
        .then(response => {
          console.log(response.data);
          this.movies = response.data.results;
        })
        .catch(error => {
          console.log(error.response.data)
        });
      },
      viewMovie (movie) {
        this.$router.push('/film/'+movie.episode_id)
      }
    }
  }
</script>