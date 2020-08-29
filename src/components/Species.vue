<template>
<v-data-table
    :headers="headers"
    :items="species"
    class="elevation-1 table, center"
><template v-slot:item.actions="{ item }">
        <v-icon
        small
        class="mr-2"
        @click="viewSpecie(item)"
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
        {text: 'Classification', value: 'classification' },
        {text: 'Designation', value: 'designation' },
        {text: 'Average height', value: 'average_height' },
        {text: 'Average lifespan', value: 'average_lifespan' },
        {text: 'Eye colors', value: 'eye_colors' },
        {text: 'Hair colors', value: 'hair_colors' },
        {text: 'Skin colors', value: 'skin_colors' },
        {text: 'Language', value: 'language' },
        {text: 'Homeworld', value: 'homeworld' },
        {text: 'Ações', value: 'actions', sortable: false}],
      movies: [],
      species: []
    }),
    created () {
      this.getSpecies ()
    },
    methods: {
      getSpecies () {
        axios.get('https://swapi.dev/api/species/')
        .then(response => {
          console.log (response.data)
          this. species = response. data.results;
        })
        .catch(error => [
          console.log(error.reponse.data)
        ])
      },
      viewSpecie (specie){
        this.$router.push('/specie/'+specie.id)
      }
    }
  }
</script>

