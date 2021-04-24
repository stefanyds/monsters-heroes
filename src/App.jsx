import React, { Component } from 'react';
import { getMonsters } from './api';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchField from './components/search-field/search-field';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      isError: false,
      errorMessage: '',
      searchField: '',
    };
  }

  render() {
    const { searchField, monsters } = this.state;
    const filter = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    // if (searchField !== '') {
    //   filter = monsters.filter((monster) => {
    //     return monster.name.toLowerCase().includes(searchField.toLowerCase());
    //   });
    // } else {
    //   filter = monsters;
    // }

    return (
      <div className="App">
        <h1>Monsters Heroes</h1>
        <SearchField
          handleChange={(e) => this.setState({ searchField: e.target.value })}
          placeholder="busca de monstros"
        />
        {!this.state.isError ? <h1>{this.state.errorMessage}</h1> : ''}
        <CardList monsters={filter} />
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
