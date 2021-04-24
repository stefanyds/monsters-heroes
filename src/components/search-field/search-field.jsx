import React, { Component } from 'react';
import './search-field.styles.css';

class SearchField extends Component {
  render() {
    return (
      <input
        className="search-field"
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.handleChange}
      />
    );
  }
}

export default SearchField;
