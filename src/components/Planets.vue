<template>
<v-data-table
    :headers="headers"
    :items="planets"
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
        {text: 'Diameter', value: 'diameter' },
        {text: 'Rotation period', value: 'rotation_period' },
        {text: 'Orbital period', value: 'orbital_period' },
        {text: 'Gravity', value: 'gravity' },
        {text: 'Population', value: 'population' },
        {text: 'Climate', value: 'climate' },
        {text: 'Terrain', value: 'terrain' },
        {text: 'Surface water', value: 'surface_water' },
        {text: 'Ações', value: 'actions', sortable: false}],
      movies: [],
      planets: []
    }),
    created () {
      this.getPlanets ()
    },
    methods: {
      getPlanets () {
        axios.get('https://swapi.dev/api/planets/')
        .then(response => {
          console.log (response.data)
          this. planets = response. data.results;
        })
        .catch(error => [
          console.log(error.reponse.data)
        ])
      }
    }
  }
</script>