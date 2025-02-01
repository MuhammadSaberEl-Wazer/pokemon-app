import React from "react";
import { Link } from "react-router-dom";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListProps {
  pokemonList: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonList }) => {
  return (
    <div className="mx-auto my-[2rem] w-[80%] sm:w-[60%] md:w-[30%] border-solid border-[#ddd] border-[1px] rounded-sm">
      <div className="bg-[#2E7CF6] min-h-[4rem] flex justify-center items-center">
        <h1 className="text-white">Poke React</h1>
      </div>
      <div>
        {pokemonList?.map((pokemon) => {
          const id = pokemon.url.split("/").filter(Boolean).pop();
          return (
            <Link
              to={`/pokemon/${id}`}
              key={pokemon.name}
              className="text-center min-h-[4rem] flex justify-center items-center text-[1.25rem] border-t border-b border-[#ddd] hover:bg-gray-100 transition-colors duration-200"
            >
              {pokemon.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
