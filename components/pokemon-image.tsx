'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function PokemonImage({ image }: { image: string }) {
  const [loading, setLoading] = useState(true)

  return (
    <Image
      src={image}
      alt='img'
      width={400}
      height={400}
      className={`sm:w-[450px] duration-700 ease-in-out group-hover:opacity-75  ${
        loading
          ? 'scale-110 blur-2xl grayscale'
          : 'scale-100 blur-0 grayscale-0'
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}
