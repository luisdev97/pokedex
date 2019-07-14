
import React, { Component } from 'react';
import getTypeInfo from './../../../services/getTypeInfo';


class DamageTypes extends Component {

	constructor(props){
		super(props);
		this.state = ({
			dataType: null
		})
	}

	assignTypeInfoToState(promise){
		promise.then(typeInfo => {
   		this.setState( {...this.state, dataType: typeInfo})
   		});
	}

	componentDidMount(){
		var typePromise = getTypeInfo(this.props.match.params.type);
   		this.assignTypeInfoToState(typePromise); 
   	}

   componentWillReceiveProps(nextProps){
   		var typePromise = getTypeInfo(nextProps.match.params.type);
   		this.assignTypeInfoToState(typePromise);
   }

    render() {    	
        return (
        	<div>
	            <h1>{this.state.dataType ? this.state.dataType.data.name : "Cargando"}</h1>
		        	<table>

		        	<thead>
		        		<tr>
		        			<th>Damage from x 2</th>
		        			<th>Damage To x 2</th>
		        			<th>Damage From x 0.5</th>
		        			<th>Damage To x 0.5</th>
		        		</tr>

		        	</thead>

		        	<tbody>
		        			        	    	
		        	</tbody>

	        	</table>
        	</div>
        );
    }

}





export default DamageTypes;