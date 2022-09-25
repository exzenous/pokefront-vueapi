<script lang="ts">

import { ref,defineComponent } from 'vue'
import { getPokemon } from './components/pokeapi/fetch'

export default defineComponent({
  
  props: {
  },
  created() {
    const fetchedData = getPokemon(1)
  },
  setup() {
  }

})

</script>

<template>
  <div>
    <h1 class="text-center text-3xl py-4">PokeAPI | Front-end</h1>
  </div>

  <div class="flex w-full flex-wrap">

    <div v-for="n in 9" class="m-2 p-2 border-2 border-solid rounded grow text-center mywidth">
      <h2 class="text-xl font-bold">Pokaemon #{{ n }}</h2>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
      <p>PokeMon Name</p>
      <p>Type: XXXXX</p>
    </div>


  </div>

</template>
