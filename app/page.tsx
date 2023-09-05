import PokemonGrid from '@/components/pokemon-grid'
import { getPokemonList } from '@/lib/pokemon-api'

export default async function Home() {
  // Load in data.
  const pokemonList = await getPokemonList()

  return <PokemonGrid pokemonList={pokemonList} />
}
