import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import { fetchData } from 'api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [img, setImg] = useState(null);

  useEffect(() => {
    console.log(name);
    if (name === '') {
      return;
    }
    setIsLoading(true);
    fetchData(name, page)
      .then(resp => resp.json())
      .then(newData => setData(prevData => [...prevData, ...newData.hits]))
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
        if (data.length === 0) {
          setError('nothing found');
        }
      });
  }, [name, page]);

  const newSearch = newName => {
    if (newName.trim().length === 0) {
      alert('Empty search field!!!');
      return;
    }
    setName(newName);
    setData([]);
    setPage(1);
  };
  const moreLoadButtonClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = e => {
    const img = e.target.dataset.url;
    setImg(img);
  };
  const closeModal = () => {
    setImg(null);
  };

  return (
    <>
      <Searchbar getNewName={newSearch} />
      {isLoading && <Loader />}
      {data.length > 0 ? (
        <ImageGallery images={data} openModal={openModal} />
      ) : (
        <h2 className="error">{error}</h2>
      )}
      {data.length >= 12 ? (
        <Button moreLoadButtonClick={moreLoadButtonClick} />
      ) : null}
      {img && <Modal img={img} closeModal={closeModal} />}
    </>
  );
};
