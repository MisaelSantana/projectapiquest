<template>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="6" class= 'container'>
          <v-card>
          <v-card-title>{{}}</v-card-title>
            <v-card-text style="height: 300px;" class="grey lighten-5"></v-card-text>
            <v-card-text style="height: 100px; position: relative">
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
    data: () => ({
    }),
    created () {
      this.getAircrafts ()
    },
    methods: {
      getAircrafts() {
        axios.get('http https://swapi.dev/api/starships')
        .then(response => {
          console.log(response.data);
          this.aircrafts = response.data.results;
        })
        .catch (error => {
          console.log(error.response.data)
        });
      }
      // viewAircrafts (aircrafts) {
      //   this.$router.push('')
      // }
    }
  }
</script>