import { Box } from 'components/Box';
import { Image, Item } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { img, tags, modalImg } = this.props;
    const { showModal } = this.state;
    return (
      <Box>
        <Item onClick={this.toggleModal}>
          <Image src={img} alt={tags} />
        </Item>
        {showModal && (
          <Modal img={modalImg} tags={tags} onCloseModal={this.toggleModal} />
        )}
      </Box>
    );
  }
}
