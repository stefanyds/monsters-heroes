import React, { Component } from 'react';
import { getMonsters } from './api';
import './App.css';
import CardList from './components/card-list/card-list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      isError: false,
      errorMessage: '',
    };
  }

  render() {
    return (
      <div className="App">
        {!this.state.isError ? <h1>{this.state.errorMessage}</h1> : ''}
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }

  componentDidMount = () => {
    getMonsters().then((response) =>
      this.setState({
        isError: response.ok,
        errorMessage: response.statusText,
        monsters: response.data.monsters,
      })
    );
  };
}
export default App;
