
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DamageTypes from './components/PokemonDetail/DamageTypes';
import PokemonDetail from './components/PokemonDetail';


const Routes = () => {
	return(
		<Switch>
			<Route path="/types/:type" component={DamageTypes}/>
		</Switch>
	)
}

const Tipos = () => (<h1>Probando las rutas</h1>);

export default Routes;