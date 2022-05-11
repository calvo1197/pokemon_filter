<template>
  <container class="body-container center-screen">
    <div class="poke-header">
      <label style="margin-right: 20px">Nombre / id </label>
      <input id="name" type="text" style="margin-right: 20px" @keydown.enter="getPokemonByNameId">
      <button class="button button-s shake" style="height: 30px;" @click="getPokemonByNameId">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <p v-if="pokeResponse.results.length === 0">
      No hay datos relacionados a la consulta.
    </p>
    <PokemonTable v-else :pokeResponse="pokeResponse.results" />
    <footer class="poke-footer" v-if="pokeResponse.results.length > 0">
      <div class="select-box">
        <select id="pag-select" :onchange="selectOnChange">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20" selected="selected">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <button class="button button-s shake" @click="getNextPokemons(false)">
        Anterior
      </button>
      <button class="button button-s shake" @click="getNextPokemons(true)">
        Siguiente
      </button>
    </footer>
  </container>
</template>

<script>
import PokemonTable from './PokemonTable.vue'
import { getPokemons, getPokemonsByNameId } from '@/api/pokemon.api'
import { reactive, onMounted } from 'vue'

export default {
  name: 'pokemon-page',
  components: { PokemonTable },
  props: {},
  setup () {
    const pokeResponse = reactive({
      results: []
    })
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
    function getNextPokemons (isNext) {
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

    function getPokemonByNameId () {
      let name = ''
      if (document.getElementById('name')) {
        name = document.getElementById('name').value
        if (name !== '') {
          getPokemonsByNameId(name).then(response => {
            const pokeObject = {
              results: [{
                name: response.data.name,
                url: response.data.location_area_encounters.replace('encounters', '')
              }]
            }
            Object.assign(pokeResponse, JSON.parse(JSON.stringify(pokeObject)))
          }).catch(error => {
            console.log('error', error)
            const errorObject = {
              results: []
            }
            Object.assign(pokeResponse, JSON.parse(JSON.stringify(errorObject)))
          })
        } else {
          let el = ''
          if (document.getElementById('pag-select')) {
            el = document.getElementById('pag-select').value
            getPokemonsLimit(el, 0)
          } else {
            getPokemonsLimit(20, 0)
          }
        }
      }
    }

    return {
      pokeResponse,
      getNextPokemons,
      selectOnChange,
      getPokemonByNameId
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
}

.poke-footer {
  margin-bottom: 30px;
}

.poke-header {
  display: flex;
  margin-bottom: 30px;
  align-items: center;
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
