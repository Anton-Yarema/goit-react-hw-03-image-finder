import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onImageClick }) => {
  const handleImageClick = image => {
    onImageClick(image); // Викликаємо метод onImageClick при кліку на зображення і передаємо вибране зображення
  };
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image.webformatURL}
          onClick={() => handleImageClick(image)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

