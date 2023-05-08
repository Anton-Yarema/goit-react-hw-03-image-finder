import { Component } from 'react';
import css from './SearchBar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';

class SearchBar extends Component {
  state = {
    imagesName: '',
  };

  handleChange = event => {
    this.setState({ imagesName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imagesName.trim() === '') {
      toast.warn('Введите слово в поиск ', {
        theme: 'colored',
      });
      return;
    }
    this.props.onSubmit(this.state.imagesName);
    this.setState({ imagesName: '' });
  };

  handleIconClick = () => {
    if (this.state.imagesName.trim() === '') {
      toast.warn('Введите слово в поиск ', {
        theme: 'colored',
      });
      return;
    }
    this.props.onSubmit(this.state.imagesName);
    this.setState({ imagesName: '' });
  };

  render() {
    return (
     <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <ImSearch />
          </button>

          <div className={css.SearchFormInputContainer}>
            <input
              className={css.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.imagesName}
              onChange={this.handleChange}
            />
            <div className={css.SearchFormIconContainer} onClick={this.handleIconClick}>
              <ImSearch className={css.SearchFormIcon} />
            </div>
          </div>
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = { 
onSubmit: PropTypes.func.isRequired,

}

 
export default SearchBar;
