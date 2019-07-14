import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Grid,Row,Col} from 'react-flexbox-grid';
import PokemonListContainer  from './containers/PokemonListContainer'; 
import PokemonDetailContainer from './containers/PokemonDetailContainer';
//<header className="App-header"><img src={logo} className="App-logo" alt="logo" /></header>
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid>
        	<Row>
        		<Col xs={6} md={4}>
        			<PokemonListContainer className="continue"/>
        		</Col>
        		<Col xs={12} md={8}>
        			<PokemonDetailContainer className="continue"/>
        		</Col>
  		    </Row>
      </Grid>
        
      <Routes/>

      </div>
    );
  }
}

export default App;
