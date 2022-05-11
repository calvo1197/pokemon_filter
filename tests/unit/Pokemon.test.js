import { shallowMount } from '@vue/test-utils'
// import Pokemon from '@/components/pokemon/Pokemon.vue'
import PokemonTable from '@/components/pokemon/PokemonTable.vue'

const mockPokeList = [
  { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }
]

describe('PokemonTable.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(PokemonTable, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
