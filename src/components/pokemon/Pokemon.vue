<template>
  <container class="body-container center-screen">
    <PokemonTable :pokeResponse="pokeResponse" />
    <footer class="poke-footer">
      <div class="select-box">
        <select id="pag-select">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20" selected="selected">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <button class="button button-s shake" @click="getNextPokemons(pokeResponse.previous)">
        Anterior
      </button>
      <button class="button button-s shake" @click="getNextPokemons(pokeResponse.next)">
        Siguiente
      </button>
    </footer>
  </container>
</template>

<script>
import PokemonTable from './PokemonTable.vue'
import { getPokemons, getPrevOrNextPokemons } from '@/api/pokemon.api'
import { reactive, onMounted } from 'vue'

export default {
  name: 'pokemon-page',
  components: { PokemonTable },
  props: {},
  setup () {
    const pokeResponse = reactive({})
    getPokemons().then(response => {
      console.log('response: ', response.data)
      Object.assign(pokeResponse, JSON.parse(JSON.stringify(response.data)))
    })

    // if nextOrPrev go next if not go prev
    function getNextPokemons (url) {
      getPrevOrNextPokemons(url).then(response => {
        console.log('response: ', response.data)
        Object.assign(pokeResponse, JSON.parse(JSON.stringify(response.data)))
      })
    }

    onMounted(() => {
      var el = document.getElementById('pag-select').value
      console.log('element', el)
    })

    // function selectOnChange () {
    //   var el = document.getElementById('pag-select').value
    //   console.log('element', el)
    // }

    return {
      pokeResponse,
      getNextPokemons
      // selectOnChange
    }
  }
}
</script>

<style>

.center-screen {
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* min-height: 85vh; */
}

.poke-footer {
  margin-bottom: 30px;
}

.button {
  width: 100px;
  margin: 0 10px;
}

.select-box {
  margin:20px auto 40px auto;
  border:1px solid #d9d9d9;
  height:30px;
  overflow: hidden;
  width: 230px;
  position:relative;
}
select {
  background: transparent;
  border: none;
  font-size: 14px;
  height: 30px;
  padding: 5px;
  width: 250px;
}
select:focus{ outline: none;}

.select-box::after{
  content:"\025be";
  display:table-cell;
  padding-top:7px;
  text-align:center;
  width:30px;
  height:30px;
  background-color:#d9d9d9;
  position:absolute;
  top:0;
  right:0px;
  pointer-events: none;
}
</style>
