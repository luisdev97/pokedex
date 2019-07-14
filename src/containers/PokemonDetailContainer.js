import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { getPokemonById } from './../actions/PokemonActions';
import PokemonDetail from './../components/PokemonDetail';
//import Routes from './../routes.js';
//import { Link } from 'react-router-dom'




class PokemonListContainer extends Component {

	imprimir(datos){
		console.log(datos);
	}
    
    render() {
        return (
        	<div className="continue">
                 <PokemonDetail pokemon={this.props.pokemon}/>
            </div>
        );
    }

}

const mapStateToProps = state => ({
pokemon: state.pokemonListReducer.selectedPokemon
});

const mapDispatchToProps = dispatch => ({

})



export default connect(mapStateToProps,mapDispatchToProps)(PokemonListContainer);


