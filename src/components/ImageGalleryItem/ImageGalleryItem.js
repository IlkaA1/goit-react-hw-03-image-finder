import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  clickOnImg,
}) => {
  return (
    <li
      key={id}
      className={css.ImageGalleryItem}
      onClick={() => {
        clickOnImg(largeImageURL);
      }}
    >
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItem_image}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
  clickOnImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
