import PropTypes from 'prop-types';
import { Component } from 'react';
import './filter.css';

export class Filter extends Component {
  setFilter = ev => {
    this.props.setFilter(ev.target.value.toLowerCase());
  };

  render() {
    return (
      <div className="filter-wrap">
        <label htmlFor="search">Find contacts by name</label>
        <input
          type="text"
          className="filter-input"
          autoComplete="off"
          name="search"
          onChange={this.setFilter}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  setFilter: PropTypes.func,
};
