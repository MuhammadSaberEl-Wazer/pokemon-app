import React from "react";
import { useGetPokemonListQuery } from "../api/pokemonApi";
import PokemonList from "../components/PokemonList";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorDisplay from "../components/common/ErrorDisplay";

const HomePage: React.FC = () => {
  const { data, error, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message="Error loading Pokémon list" />;

  return <PokemonList pokemonList={data?.results || []} />;
};

export default HomePage;
