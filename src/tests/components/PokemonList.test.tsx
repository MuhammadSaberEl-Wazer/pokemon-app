import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import PokemonList from "../../components/PokemonList";

test("renders Pokémon list", () => {
  const mockPokemonList = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
  ];

  render(
    <Provider store={store}>
      <PokemonList pokemonList={mockPokemonList} />
    </Provider>
  );
  expect(screen.getByText("bulbasaur")).toBeInTheDocument();
  expect(screen.getByText("charmander")).toBeInTheDocument();
});
