<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>Pokemon</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody class="table">
        <tr v-for="poke in pokeResponse.results" :key="poke.icon">
          <td>
            <img class="poke-img" :src="`${imgApi}/${poke.url.split('/')[6]}.png`" />
          </td>
          <td>
            {{poke.name}}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'pokemon-table',
  props: ['pokeResponse'],
  setup (props) {
    const imgApi = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    return {
      imgApi
    }
  }
}
</script>

<style scoped>
section {
  height: 700px;
  justify-self: center;
}
table{
  overflow-y: scroll;
  width: 250px;
  height: 650px;
  display: block;
}

.poke-img {
  width: 60%;
  height: 60%;
}

.button {
  max-width: 50%;
}

</style>
