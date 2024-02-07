import { PokemonsGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "151 Pokemons",
  description: "151 Pokemons",
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(res => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))
  return pokemons;
}


export default async function PokemonPage() {
  const pokemons = await getPokemons();
  return (
    <div className='flex flex-col'>
      <span className='text-4xl my-2 text-center'>Listado de Pokemons <small>estatico</small></span>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}