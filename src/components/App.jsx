import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import * as API from './services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { CirclesWithBar } from 'react-loader-spinner';

export class App extends Component {
  state = {
    search: '',
    images: [],
    loader: false,
  };

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.search !== this.state.search) {
      this.addImage();
    }
  }

  addImage = async () => {
    try {
      this.setState({ loader: true });
      const images = await API.getFotoGallery(this.state.search);
      this.setState({ images });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loader: false });
    }
  };

  addSearchName = ({ search }) => {
    this.setState({ search });
  };

  render() {
    const { images, loader } = this.state;
    return (
      <Box>
        <Searchbar onSubmit={this.addSearchName} />
        {loader ? (
          <CirclesWithBar color="blue" ariaLabel="circles-with-indicator" />
        ) : (
          <ImageGallery items={images} />
        )}
        <GlobalStyle />
      </Box>
    );
  }
}
