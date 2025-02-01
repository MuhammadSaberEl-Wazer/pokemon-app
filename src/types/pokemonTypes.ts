// Single Pokemon
export interface Pokemon {
  name: string;
  url: string;
}

// Pokemon list API
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

// Pokemon details
export interface PokemonDetailsInterface {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

export interface PokemonDetailsResponse extends PokemonDetailsInterface {}
