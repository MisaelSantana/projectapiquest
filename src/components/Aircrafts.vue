<template>
<v-data-table
    :headers="headers"
    :items="aircrafts"
    class="elevation-1 table, center"
><template v-slot:item.actions="{ item }">
        <v-icon
        small
        class="mr-2"
        @click="viewAircraft(item)"
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
      headers: [{text: 'Name', value: 'name'},
        {text: 'Model', value: 'model' },
        {text: 'Starship class', value: 'starship_class' },
        {text: 'Manufacturer', value: 'manufacturer' },
        {text: 'Value', value: 'cost_in_credits' },
        {text: 'Lenght', value: 'length' },
        {text: 'Crew', value: 'crew' },
        {text: 'Pasaengers', value: 'passengers' },
        {text: 'Max atmosphering speed', value: 'max_atmosphering_speed' },
        {text: 'Hyperdrive rating', value: 'hyperdrive_rating' },
        {text: 'MGLT', value: 'MGLT' },
        {text: 'Ações', value: 'actions', sortable: false}],
      movies: [],
      aircrafts: []
    }),
    created () {
      this.getAircrafts ()
    },
    methods: {
      getAircrafts () {
        axios.get('https://swapi.dev/api/starships/')
        .then(response => {
          console.log (response.data)
          this. aircrafts = response. data.results;
        })
        .catch(error => [
          console.log(error.reponse.data)
        ])
      },
      viewAircraft (aircraft) {
        this.$router.push('/aircraft/'+aircraft.id)
      }
    }
  }
</script>