<template>
<v-data-table
    :headers="headers"
    :items="people"
    class="elevation-1 table, center"
><template v-slot:item.actions="{ item }">
        <v-icon
        small
        class="mr-2"
        @click="(item)"
        >
        mdi-information
        </v-icon>
    </template>
    <router-view></router-view>
</v-data-table>
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
      headers: [{text: 'Name', value: 'name' },
        {text: 'Height', value: 'height' },
        {text: 'Mass', value: 'mass' },
        {text: 'Hair color', value: 'hair_color' },
        {text: 'Skin color', value: 'skin_color' },
        {text: 'Eyes color', value: 'eye_color' },
        {text: 'Gender', value: 'gender' },
        {text: 'Information', value: 'actions', sortable: false}],
      movies: [],
      people: []
    }),
    created () {
      this.getPeople ()
    },
    methods: {
      getPeople () {
        axios.get('https://swapi.dev/api/people/')
        .then(response => {
          console.log (response.data)
          this. people = response. data.results;
        })
        .catch(error => [
          console.log(error.reponse.data)
        ]);
      },
    }
  }
</script>