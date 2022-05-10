import httpClient from '@/router/httpClient'

function getPokemons () {
  return httpClient.get('pokemon/?limit=20&offset=0')
}

function getPrevOrNextPokemons (url) {
  return httpClient.get(url)
}

export {
  getPokemons,
  getPrevOrNextPokemons
}
