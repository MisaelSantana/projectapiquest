<template>

  <!-- navdrawer -->

  <v-app id="inspire">
    <v-navigation-drawer class="navdrawer"
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item to="/films/">
          <v-list-item-action>
            <v-icon>mdi-film</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Filmes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Personagens</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-rocket-launch</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Naves</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-google-assistant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Planetas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-google-downasaur</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Espécies</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-car</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Veículos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- navbar -->

    <v-app-bar
      app
      clipped-left
      src="" class="barbackground"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Star Wars API - Quest</v-toolbar-title>
    </v-app-bar>

  <!-- body page -->

    <v-main>
      <v-container
        class="fill-height background"
        fluid
      >
      <router-view></router-view>
    </v-container>
    </v-main>

      <v-footer app>
        <span>&copy; {{ new Date().getFullYear() }} Projeto Quest API Star Wars - Misael Santana</span>
      </v-footer>
  </v-app>
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
      drawer: null,
      title:(''),
      headers: [{ text: 'Titulo', value: 'title' },
        { text: 'Epsódio', value: 'episode_id' },
        { text: 'Diretor', value: 'director' },
        { text: 'Produtor', value: 'producer' },
        { text: 'Data de lançamento', value: 'release_date' },
        { text: 'Ações', value: 'actions', sortable: false }],
      movies: []
    }),
    created () {
      this.$vuetify.theme.dark = true
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


<style>
.barbackground {
  background-image: url(https://i.pinimg.com/originals/60/c2/17/60c2177448cbf90408ed1df7da78cf00.jpg);
  background-size: cover;
  background-position: center;
}
.background {
  background-image: url(https://i.pinimg.com/originals/a8/66/97/a866972eff1943ec3d8d96c52110d5bc.jpg);
  background-size: cover;
}
.navdrawer {
  background-image: url(https://i.pinimg.com/originals/94/bc/90/94bc9097cc143f3b83e3c7439527e0d8.jpg);
  background-size: cover;
  background-position: center;
}
:root {
  --color-bg-main: black;
}
.color {
  color: var(--color-bg-main);
}
.table {
  margin: 0 auto;
}
</style>