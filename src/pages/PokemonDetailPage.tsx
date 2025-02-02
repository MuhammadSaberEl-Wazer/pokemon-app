import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonDetailsQuery } from "../api/pokemonApi";
import PokemonDetails from "../components/PokemonDetails";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorDisplay from "../components/common/ErrorDisplay";

const PokemonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pokemonId = Number(id);
  const { data, error, isLoading } = useGetPokemonDetailsQuery(pokemonId);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message="Error loading Pokémon details" />;

  return (
    <div className="min-h-[86vh]">
      <PokemonDetails pokemon={data!} />
    </div>
  );
};

export default PokemonDetailPage;
