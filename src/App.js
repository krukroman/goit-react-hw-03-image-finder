import { Component } from 'react';
import Searchbar from './Components/Searchbar';
import ImagesGalleryInfo from './Components/ImageGalleryInfo';

export default class App extends Component {
  state = {
    searchQuery: null,
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
    const { searchQuery } = this.state;
    const onSearchbarSubmit = this.onSearchbarSubmit;
    return (
      <>
        <Searchbar onSubmit={onSearchbarSubmit} />
        <ImagesGalleryInfo searchQuery={searchQuery} />
      </>
    );
  }
}
