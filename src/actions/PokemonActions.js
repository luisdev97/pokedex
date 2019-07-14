import axios from 'axios';
import { store }  from './../store';


export const FETCH_POKEMON = 'FETCH_POKEMON';
export const FETCH_ONE = 'FETCH_ONE';


export const fetchPokemon = pokemon => ({
	type: FETCH_POKEMON,
	payload: { pokemon }
});

export const fetchOnePokemon = pokemon => ({
	type: FETCH_ONE,
	payload : pokemon
});


export const getPokemon = () => {
		return axios.get('https://pokeapi.co/api/v2/pokemon').then(resultSet => {
			//console.log(resultSet)
			store.dispatch(fetchPokemon(resultSet.data.results))
		}).catch(
			error => {console.log(error)}
		);

}

export const getPokemonByName = name => {
	return dispatch => {
		return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(pokemon => {
			store.dispatch(fetchOnePokemon(pokemon))
		}).catch(error =>{
			console.log(error);
		});
	}
		
}

