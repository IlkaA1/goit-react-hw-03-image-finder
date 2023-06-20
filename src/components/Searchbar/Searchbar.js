import css from './search.module.css';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <input
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          id="searchQuery"
        />
        <button type="submit" className={css.SearchForm_button}>
          <FcSearch />
          <span className={css.SearchForm_button_label}>Search</span>
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
