import axios from 'axios';

const getTypeInfo = type => {
	return axios.get(`https://pokeapi.co/api/v2/type/${type}`).then(infoType => {
		
		return infoType;
	}).catch(error=>{
		console.log(error);
	})
}

export default getTypeInfo;




