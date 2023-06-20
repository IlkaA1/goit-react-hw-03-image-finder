import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ articles, clickOnImg }) => {
  return (
    <ul className={css.ImageGallery}>
      {articles.map(articl => (
        <ImageGalleryItem key={articl.id} {...articl} clickOnImg={clickOnImg} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickOnImg: PropTypes.func.isRequired,
};

export default ImageGallery;
