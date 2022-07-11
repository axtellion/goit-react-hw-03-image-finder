import { Component } from 'react';

import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Loader } from './Loader/Loader';

import * as API from './services/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Btn } from './Button/Btn';

export class App extends Component {
  state = {
    page: 1,
    search: '',
    images: [],
    loader: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.addImage();
    }
  }

  addImage = async () => {
    const { search, page } = this.state;
    this.setState({ loader: true });

    try {
      const images = await API.getFotoGallery(search, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      console.log(error);
      this.setState({ loader: false });
    } finally {
      this.setState({ loader: false });
    }
  };

  addSearchName = ({ search }) => {
    this.setState({ search, page: 1, images: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loader } = this.state;

    return (
      <Box>
        <Searchbar onSubmit={this.addSearchName} />
        {loader && <Loader />}
        <ImageGallery items={images} />
        {images.length > 0 && <Btn onClick={this.loadMore} />}
        <GlobalStyle />
      </Box>
    );
  }
}
