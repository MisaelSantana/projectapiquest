<template>
<v-data-table
    :headers="headers"
    :items="vehicles"
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
      headers: [{text: 'Nome', value: 'name'},
        {text: 'Model', value: 'model' },
        {text: 'Vehicle class', value: 'vehicle_class' },
        {text: 'Manufacturer', value: 'manufacturer' },
        {text: 'Length', value: 'length' },
        {text: 'Value', value: 'cost_in_credits' },
        {text: 'Crew', value: 'crew' },
        {text: 'Passengers', value: 'passengers' },
        {text: 'Max atmosphering speed', value: 'max_atmosphering_speed' },
        {text: 'Cargo capacity', value: 'cargo_capacity' },
        {text: 'Consumables', value: 'consumables' },
        {text: 'Ações', value: 'actions', sortable: false}],
      movies: [],
      vehicles: []
    }),
    created () {
      this.getVehicles ()
    },
    methods: {
      getVehicles () {
        axios.get('https://swapi.dev/api/vehicles/')
        .then(response => {
          console.log (response.data)
          this. vehicles = response. data.results;
        })
        .catch(error => [
          console.log(error.reponse.data)
        ])
      }
    }
  }
</script>

