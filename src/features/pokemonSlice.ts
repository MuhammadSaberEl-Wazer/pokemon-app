import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
  selectedPokemonId: number | null;
  isDetailsModalOpen: boolean;
}

const initialState: PokemonState = {
  selectedPokemonId: null,
  isDetailsModalOpen: false,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSelectedPokemonId: (state, action: PayloadAction<number | null>) => {
      state.selectedPokemonId = action.payload;
    },
    setIsDetailsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isDetailsModalOpen = action.payload;
    },
  },
});

export const { setSelectedPokemonId, setIsDetailsModalOpen } = pokemonSlice.actions;

export default pokemonSlice.reducer;