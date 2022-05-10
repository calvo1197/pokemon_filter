<template>
  <container class="body-container center-screen">
    <PokemonTable :pokeResponse="pokeResponse" />
    <footer class="poke-footer">
      <div class="select-box">
        <select id="pag-select" :onchange="selectOnChange">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20" selected="selected">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <button class="button button-s shake" @click="getNextPokemons(pokeResponse.previous, false)">
        Anterior
      </button>
      <button class="button button-s shake" @click="getNextPokemons(pokeResponse.next, true)">
        Siguiente
      </button>
    </footer>
  </container>
</template>

<script>
import PokemonTable from './PokemonTable.vue'
import { getPokemons } from '@/api/pokemon.api'
import { reactive, onMounted } from 'vue'

export default {
  name: 'pokemon-page',
  components: { PokemonTable },
  props: {},
  setup () {
    const pokeResponse = reactive({})
    let prevOffset = ''

    onMounted(() => {
      getPokemonsLimit(20, 0)
    })

    function getPokemonsLimit (limit, offset) {
      prevOffset = offset
      getPokemons(limit, offset).then(response => {
        Object.assign(pokeResponse, JSON.parse(JSON.stringify(response.data)))
      })
    }

    // if nextOrPrev go next if not go prev
    function getNextPokemons (url, isNext) {
      console.log('url: ' + url)
      if (isNext) {
        prevOffset = pokeResponse.next.split('?')[1].split('&')[0].split('=')[1]
      } else {
        prevOffset = pokeResponse.previous.split('?')[1].split('&')[0].split('=')[1]
      }
      let el = ''
      if (document.getElementById('pag-select')) {
        el = document.getElementById('pag-select').value
        getPokemonsLimit(el, prevOffset)
      }
    }

    function selectOnChange () {
      let el = ''
      if (document.getElementById('pag-select')) {
        el = document.getElementById('pag-select').value
        getPokemonsLimit(el, prevOffset)
      }
    }

    return {
      pokeResponse,
      getNextPokemons,
      selectOnChange
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
