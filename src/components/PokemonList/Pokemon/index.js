import React from 'react'
import './index.css';


const getPokemonId = (url,html) => {
	var numeros = "0123456789";
	var idPokemon = url.substring(url.length -4, url.length -1).split("");

	const ID = idPokemon.map(caracter => {
		if(numeros.indexOf(caracter) !== -1){
			return caracter;
		}}).join("");

	if(html)
	return <h3 style={{marginLeft: "10px"}}className="activeNeon">{`#${ID}`}</h3>;
	else
	return ID;
}


const Pokemon = (props) => (
	<div onClick={()=> props.onPokemonClick()} className="pokemon">
		<div className="spriteContainer " 
			style={{backgroundImage: "url(" + `./../../../assets/images/pokemon/${getPokemonId(props.pokemon.url,false)}.png` + ")",
			backgroundPosition: 'center'}}>
        </div>
            {getPokemonId(props.pokemon.url,true)}
		<h3 className="continue pointer neon" style={{textAlign: "center", marginLeft: "15px"}}> {props.pokemon.name}</h3>

	</div>
)

export default Pokemon;