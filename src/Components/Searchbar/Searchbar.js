import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      searchQuery: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchQuery } = this.state;
    this.props.onSubmit(searchQuery);
  };

  render() {
    const { searchQuery } = this.state;
    const onSubmit = this.handleSubmit;
    const onChange = this.handleChange;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            onChange={onChange}
            value={searchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
