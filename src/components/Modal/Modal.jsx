import { Component } from 'react';
import { ModalOver, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { img, tags } = this.props;
    return (
      <ModalOver onClick={this.handleBackdropClick}>
        <ModalWindow>
          <img src={img} alt={tags} />
        </ModalWindow>
      </ModalOver>
    );
  }
}
