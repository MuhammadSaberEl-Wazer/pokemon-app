import React from "react";
import { PokemonDetailsInterface } from "../types/pokemonTypes";

interface PokemonDetailsProps {
  pokemon: PokemonDetailsInterface;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
  const pokemonDetailsArray = [
    {
      id: 0,
      label: "Name",
      value: pokemon.name,
    },
    {
      id: 1,
      label: "Height",
      value: pokemon.height / 10 + "m",
    },
    {
      id: 2,
      label: "Weight",
      value: pokemon.weight / 10 + "kg",
    },
    {
      id: 3,
      label: "Types",
      value: pokemon.types.map((type) => type.type.name).join(","),
    },
  ];
  return (
    <div className="mx-auto my-[2rem] w-[80%] min-h-[80vh] sm:w-[60%] md:w-[30%] border-solid border-[#ddd] border-[1px] rounded-sm">
      <div className="bg-[#2E7CF6] min-h-[4rem] flex justify-center items-center">
        <h1 className="text-white capitalize">{pokemon.name}</h1>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width="200px"
          height="200px"
        />
      </div>
      <div>
        {pokemonDetailsArray.map((detail) => (
          <p
            key={detail.id}
            className="text-center min-h-[4rem] flex justify-center items-center text-[1.25rem] border-t border-b border-[#ddd]  capitalize"
          >
            <span className="font-bold"> {detail.label}</span>: {detail.value}
          </p>
        ))}
        {/* <p>Name: {pokemon.name}</p>
        <p>Height: {pokemon.height / 10}m</p>
        <p>Weight: {pokemon.weight / 10}kg</p>
        <p>Types: {pokemon.types.map((type) => type.type.name).join(", ")}</p> */}
      </div>
    </div>
  );
};

export default PokemonDetails;
