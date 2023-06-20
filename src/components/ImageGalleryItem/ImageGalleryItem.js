import css from './ImageGalleryItem.module.css';

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

export default ImageGalleryItem;
