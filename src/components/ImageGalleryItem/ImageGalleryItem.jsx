// import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li className={css['gallery-item']} key={id}>
            <img src={webformatURL} alt={id} data-url={largeImageURL} />
          </li>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;
