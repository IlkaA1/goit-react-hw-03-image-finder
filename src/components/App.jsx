import { fetchArticlesWithQuery } from '../services/services';
import React, { Component } from 'react';
// import { ColorRing } from 'react-loader-spinner';
import Notiflix from 'notiflix';
import css from './app.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: false,
    searchQuery: '',
    page: 1,
    loadMore: false,
    webformatURL: '',
    showModal: false,
  };

  сlickOnSubmit = searchQuery => {
    this.setState({
      searchQuery,
      page: 1,
      articles: [],
      error: false,
    });
  };

  clickOnImg = img => {
    return this.setState({
      webformatURL: img,
      showModal: true,
    });
  };

  closeModal = closeKey => {
    if ('modal_Overlay__hpzKM' || 'close') {
      this.setState({ showModal: false });
    }
  };

  сlickOnButton = evt => {
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.searchQuery !== prevState.searchQuery
    ) {
      this.setState({ isLoading: true });

      try {
        await fetchArticlesWithQuery(
          this.state.searchQuery,
          this.state.page
        ).then(res => {
          const { hits, totalHits } = res.data;
          if (this.state.searchQuery !== prevState.searchQuery) {
            this.setState({ articles: [(prevState.articles = [])] });
          }

          if (hits.length > 0) {
            this.setState({
              articles: [...prevState.articles, ...hits],
              loadMore: this.state.page < Math.ceil(totalHits / 12),
            });
          } else {
            this.setState({
              articles: [],
              loadMore: false,
            });
            return Notiflix.Notify.failure(
              '🤔 Sorry, the search did not find anything. Please try again'
            );
          }
        });
      } catch ({ error }) {
        this.setState({
          error: true,
          articles: [],
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { articles, isLoading, loadMore, error, webformatURL, showModal } =
      this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.сlickOnSubmit} />
        {isLoading && <Loader />}
        {error ? Notiflix.Notify.failure('Error!!!') : null}
        {articles === [] ? null : (
          <ImageGallery articles={articles} clickOnImg={this.clickOnImg} />
        )}
        {showModal ? (
          <Modal img={webformatURL} closeModal={this.closeModal} />
        ) : null}

        {loadMore && <Button onClick={this.сlickOnButton} />}
      </div>
    );
  }
}
