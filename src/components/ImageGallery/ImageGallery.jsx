import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ openModal, images }) => {
  return (
    <>
      <ul className={css.gallery} onClick={e => openModal(e)}>
        <ImageGalleryItem images={images} />
      </ul>
    </>
  );
};

export default ImageGallery;
