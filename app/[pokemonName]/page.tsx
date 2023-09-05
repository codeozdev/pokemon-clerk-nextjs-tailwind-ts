import { getPokemon } from '@/lib/pokemon-api'
import Image from 'next/image'
import { Progress } from '@/components/ui/progress'
import PaddingContainer from '@/components/layout/padding-container'

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string }
}) {
  const { pokemonName } = params
  const pokemonObject = await getPokemon(pokemonName)

  return (
    <PaddingContainer>
      <div className='flex flex-col items-center justify-center h-[calc(100vh-110px)] overflow-y-hidden'>
        <div className='flex items-center justify-between sm:justify-around sm:px-12 w-full'>
          <h1 className='text-4xl font-bold sm:my-10 text-center'>
            {pokemonObject.name}
          </h1>
          <h3 className='text-xs'>Weight: {pokemonObject.height}</h3>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 place-content-center'>
          <Image
            src={pokemonObject.sprites.other['official-artwork'].front_default}
            alt='img'
            width={400}
            height={400}
            className='sm:w-[450px]'
          />
          <div className='flex items-center justify-center'>
            <div className='w-full'>
              {pokemonObject.stats.map((statObject: any) => {
                const statName = statObject.stat.name
                const statValue = statObject.base_stat
                return (
                  <div
                    key={statName}
                    className='flex items-center sm:w-[500px]'>
                    <h3 className='p-3 w-2/4 text-sm sm:text-base'>
                      {statName} : {statValue}
                    </h3>
                    <Progress value={statValue} className='w-2/4 m-auto' />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </PaddingContainer>
  )
}
