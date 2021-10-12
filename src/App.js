import { Component } from 'react';
import Searchbar from './Components/Searchbar';

export default class App extends Component {
  state = {
    searchQuery: '',
  };

  onSearchbarSubmit = searchQuery => {
    if (!searchQuery.trim()) {
      alert('Empty query');
      return;
    }
    this.setState({
      searchQuery,
    });
  };

  render() {
    const onSubmit = this.onSearchbarSubmit;
    return <Searchbar onSubmit={onSubmit} />;
  }
}
