import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <List>
      {items.map(item => {
        return (
          <ImageGalleryItem
            key={item.id}
            img={item.webformatURL}
            tags={item.tags}
            modalImg={item.largeImageURL}
          />
        );
      })}
    </List>
  );
};
