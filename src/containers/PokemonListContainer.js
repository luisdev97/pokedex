import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from './../actions/PokemonActions';
import PokemonList from './../components/PokemonList';
import { getPokemonByName } from './../actions/PokemonActions';


class PokemonListContainer extends Component {

	componentDidMount(){
	  this.props.getPokemonList();
	}

	imprimir(datos){
		console.log(datos);
		//console.log(this.props.pokemonList.data.results)
		//<h1 onClick={()=> {this.imprimir(pokemonList)}}>Lista de pokemon</h1>

	}

	handleSelectedPokemon = name => {
       this.props.getOnePokemon(name);
    }

    render() {
    	const pokemonList = this.props.pokemonList;
        return (
        	<div style={{width: "30%"}}>
	           <div className="pokemonList">
	           <PokemonList getOnePokemon={this.handleSelectedPokemon}style={{height: "50%"}} pokemonList={pokemonList}/>
	           </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
	pokemonList: state.pokemonListReducer.pokemonList.pokemon,
	selectedPokemon: state.pokemonListReducer.selectedPokemon
});

const mapDispatchToProps = dispatch => ({
	getPokemonList: () => dispatch(getPokemon),
	getOnePokemon: name => dispatch(getPokemonByName(name))
})



export default connect(mapStateToProps,mapDispatchToProps)(PokemonListContainer);


