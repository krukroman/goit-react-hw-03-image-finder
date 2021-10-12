import { Component } from 'react';
import getImages from '../../services/apiService';
import ImageGallery from './ImageGallery';
import Button from '../Button';

export default class ImagesGalleryInfo extends Component {
  stateDefault = {
    pageNumber: 1,
  };

  state = {
    pageNumber: this.stateDefault.pageNumber,
    images: null,
    showLoadMoreBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    const currentPageNumber = prevState.pageNumber;
    const nextPageNumber = this.state.pageNumber;

    if (prevQuery !== nextQuery) {
      this.smoothScrollUp();
      this.getImagesByNewQuery(nextQuery);
    }

    if (nextPageNumber > currentPageNumber) {
      this.loadMoreImages(prevQuery, prevState, nextPageNumber);
    }
  }

  getImagesByNewQuery(newSearchQuery) {
    const defaultPageNumber = this.stateDefault.pageNumber;
    getImages(newSearchQuery, defaultPageNumber).then(images => {
      this.setState({
        images: images.hits,
        pageNumber: defaultPageNumber,
        showLoadMoreBtn: true,
      });
      if (images.hits.length === 0 || images.hits.length < 12) {
        this.setState({
          showLoadMoreBtn: false,
        });
      }
    });
  }

  loadMoreImages(prevQuery, prevState, nextPageNumber) {
    getImages(prevQuery, nextPageNumber).then(images => {
      this.setState({
        images: [...prevState.images, ...images.hits],
        showLoadMoreBtn: true,
      });
      if (images.hits.length === 0 || images.hits.length < 12) {
        this.setState({
          showLoadMoreBtn: false,
        });
      }
      this.smoothScrollDown();
    });
  }

  onLoadMoreBtnClick = e => {
    e.preventDefault();
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  smoothScrollDown() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  smoothScrollUp() {
    window.scrollTo({
      top: document.getElementById('root'),
      behavior: 'smooth',
    });
  }

  render() {
    const { images, showLoadMoreBtn } = this.state;
    const onLoadMoreBtnClick = this.onLoadMoreBtnClick;

    return (
      <>
        <ImageGallery galleryData={images} />

        {showLoadMoreBtn && (
          <div className="ButtonWrapper">
            <Button title="Load more" onClick={onLoadMoreBtnClick} />
          </div>
        )}
      </>
    );
  }
}
