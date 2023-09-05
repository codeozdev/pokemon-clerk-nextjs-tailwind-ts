'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import PokemonCard from '@/components/pokemon-card'
import PaddingContainer from '@/components/layout/padding-container'

export default function PokenonGrid({ pokemonList }: any) {
  const [searchText, setSearchText] = useState('')

  //filter
  const searchPokemon = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase()),
    )
  }

  const filteredPokemonList = searchPokemon(pokemonList)

  return (
    <PaddingContainer>
      <div className='w-full'>
        <h3 className='text-lg sm:text-3xl py-6 text-center'>
          Search For Your Pokemon!
        </h3>
        <div className='max-w-xl mx-auto'>
          <Label htmlFor='pokemonName' className='text-xs'>
            Pokemon Name
          </Label>
          <Input
            type='text'
            value={searchText}
            id='pokemonName'
            autoComplete='off'
            placeholder='Charizard, Pikachu, etc.'
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <h3 className='text-lg sm:text-3xl mt-8 mb-4 text-center'>
          Pokemon Collection
        </h3>
        <div className='grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-6'>
          {filteredPokemonList.map((pokemon: any) => {
            return (
              <PokemonCard name={pokemon.name} key={pokemon.name + 'Card'} />
            )
          })}
        </div>
      </div>
    </PaddingContainer>
  )
}
