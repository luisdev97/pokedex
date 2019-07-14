
import { combineReducers } from 'redux';
import { pokemonListReducer as pokemonReducer } from './pokemonReducer';

const reducers = combineReducers({
	pokemonListReducer: pokemonReducer,
})

export default reducers;