import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ img, tags }) => {
  return (
    <Item>
      <Image src={img} alt={tags} />
    </Item>
  );
};
