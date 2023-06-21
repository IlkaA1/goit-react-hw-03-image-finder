import css from './search.module.css';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  onChangeState = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state.searchQuery);

    evt.target.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={css.SearchForm_input}
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            id="searchQuery"
            onChange={this.onChangeState}
          />
          <button type="submit" className={css.SearchForm_button}>
            <FcSearch />
            <span className={css.SearchForm_button_label}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
