import httpClient from '@/router/httpClient'

function getPokemons (limit, offset) {
  return httpClient.get(`pokemon/?limit=${limit}&offset=${offset}`)
}

function getPokemonsByNameId (nameId) {
  return httpClient.get(`pokemon/${nameId}/`)
}

export {
  getPokemons,
  getPokemonsByNameId
}
