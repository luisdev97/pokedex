
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import { pokemonListReducer } from '../reducers/pokemonReducer.js';
import reducers from '../reducers';

//Initial state para que la aplicación comience con datos
const initialState = {

};


//export const store = createStore(pokemonListReducer, initialState, compose(applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export const store = createStore(reducers, initialState, compose(applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//export const store = createStore(pokemonListReducer, initialState , composeEnhancers(applyMiddleware(thunk)));
