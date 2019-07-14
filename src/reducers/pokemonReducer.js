import { FETCH_POKEMON, FETCH_ONE } from '../actions/PokemonActions';

const initialState = {
	pokemonList: []
};

export const pokemonListReducer = (state = initialState, action) =>{
	switch (action.type) {

		case FETCH_POKEMON:
			return {...state, pokemonList: action.payload}

		case FETCH_ONE:
			return {...state, selectedPokemon: action.payload}

		default:
			return state;
	}

} 