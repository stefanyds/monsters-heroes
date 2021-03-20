import React, { Component } from 'react';
import { getMonsters } from './api';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      isError: false,
      errorMessage: ""
    };
  }

  render() {
    return (
      <div className="App">
        {!this.state.isError ?
          <h1>{this.state.errorMessage}</h1>
          : ""
        }
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
          ))}
      </div>
    );
  }
  
  componentDidMount = () => {
    getMonsters().then((response) => this.setState({
      isError: response.ok,
      errorMessage: response.statusText, 
      monsters: response.data.monsters 
    }));
  }

}
export default App;
