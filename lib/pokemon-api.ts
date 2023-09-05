export async function getPokemonList() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`,
  )
  const data = await response.json()
  return data.results
}

export async function getPokemon(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return await response.json()
}

//ayni component icerisinde birden fazla api cagiriyorsak bunlara export default yapmamiz gerekir cunku en fazla bir tane default export olabilir
