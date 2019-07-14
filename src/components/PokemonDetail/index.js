import React from 'react';
import './index.css';
import {Row,Col} from 'react-flexbox-grid';
import { getColor} from '../../services/pokemonService';
import { Link } from 'react-router-dom'


const mapTypesToDiv = types =>{
	
	return  types.map(type=>{
		const color = getColor(type.type.name);
	 return <Col xs={5} key={type.type.name} className="pokeType" style={{backgroundColor: color}}>
	 {type.type.name}
	 </Col>
	 
})}



const PokemonDetail = (props) => {

	return (
		<div className="detailContainer detailContainerBackground">
		<h1 onClick={()=> console.log(props.pokemon)}>{props.pokemon ? props.pokemon.data.name + " detail" : "Choose a Pokemon"} </h1>
		<Row>
			<Col xs={11.5}>
				<Row center="xs">
      				<div className="imageBox">
      					<img height="300px" width="300px" src={props.pokemon ? props.pokemon.data.sprites.front_default : "http://pngimg.com/uploads/pokeball/pokeball_PNG12.png"}></img>
      				</div>
    			</Row>
			</Col>
		</Row>

		<Row around="xs">
		{props.pokemon ? mapTypesToDiv(props.pokemon.data.types) : "Cargando"}		
		</Row>

		</div>
	)
}


const table = pokemon => {
	//{props.pokemon ? table(props.pokemon.data) : "Cargando"}

	return (
		<Row start="xs">
		<Col xs={6}>
			<table className="paleBlueRows" style={{marginLeft: "50px",marginTop: "50px"}}>
				<thead>
					<tr>
						<th>Peso</th>
						<th>Altura</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td> {pokemon.weight}</td>
						<td>{pokemon.height }</td>
					</tr>
				</tbody>	
			</table>
		</Col>		
		</Row>
	);
}
export default PokemonDetail;
