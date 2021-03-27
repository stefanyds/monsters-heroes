import React, { Component } from 'react';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
