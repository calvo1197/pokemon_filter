import httpClient from '@/router/httpClient'

function getPokemons (limit, offset) {
  return httpClient.get(`pokemon/?limit=${limit}&offset=${offset}`)
}

function getPrevOrNextPokemons (url) {
  return httpClient.get(url)
}

export {
  getPokemons,
  getPrevOrNextPokemons
}
