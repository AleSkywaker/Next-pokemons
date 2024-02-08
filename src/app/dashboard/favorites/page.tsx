import { PokemonsGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Favoritos",
};

export default async function PokemonPage() {
  return (
    <div className='flex flex-col'>
      <span className='text-4xl my-2 text-center'>Pokemons Favoritos <small className='text-blue-500'>Global State</small></span>
      <PokemonsGrid pokemons={[]} />
    </div>
  );
}