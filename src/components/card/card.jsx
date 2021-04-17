import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div>
        <img
          src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}
          alt="Monster"
        />
        <h2 key={this.props.monster.id}>{this.props.monster.name}</h2>
        <p>{this.props.monster.email}</p>
      </div>
    );
  }
}

export default Card;
