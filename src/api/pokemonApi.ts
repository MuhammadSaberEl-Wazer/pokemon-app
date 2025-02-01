import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonListResponse, PokemonDetailsResponse } from '../types/pokemonTypes';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_API_URL }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListResponse, void>({
      query: () => '/pokemon',
    }),
    getPokemonDetails: builder.query<PokemonDetailsResponse, number>({
      query: (id) => `/pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailsQuery } = pokemonApi;