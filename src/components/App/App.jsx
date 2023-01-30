import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import API from '../../API';

import Modal from 'components/Modal';
import ImageGallery from 'components/ImageGallery';

import Button from 'components/Button';
import Loader from 'components/Loader';
import { AppStyles } from './App.styled';
import Searchbar from 'components/Searchbar';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);
  const PER_PAGE = 12;
  const [totalPages, setTotalPages] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalAlt, setModalAlt] = useState(null);

  const handleInputValue = searchQuery => {
    if (query === searchQuery) {
      toast.error('Enter keywords to request!');
      return;
    }
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleShowModal = (src, alt) => {
    toggleModal();
    setModalImage(src);
    setModalAlt(alt);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleLoadMore = e => {
    incrementPage();
  };

  useEffect(() => {
    if (page === totalPages) {
      toast.success('There are all images!');
    }
  }, [page, totalPages]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setStatus(Status.PENDING);

    API(query, page)
      .then(({ hits, totalHits }) => {
        if (hits.length === 0) {
          toast.error(`По запросу ${query} ничего не найдено`, {
            duration: 1000,
          });
          return Promise.reject();
        }
        setImages(prevImages => [...prevImages, ...hits]);
        setTotalPages(Math.ceil(totalHits / PER_PAGE));
        setStatus(Status.RESOLVED);
      })
      .catch(error => setStatus(Status.REJECTED));
  }, [query, page]);

  return (
    <AppStyles>
      <Searchbar onSubmit={handleInputValue} />
      {status === Status.PENDING && page === 1 && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} onClick={handleShowModal} />
      )}
      {status === Status.PENDING && page > 1 && <Loader />}
      {status === Status.RESOLVED && page < totalPages && (
        <Button onClick={handleLoadMore} status={status} />
      )}
      <ToastContainer autoClose={3000} theme={'colored'} />
      {showModal && (
        <Modal src={modalImage} title={modalAlt} onClose={toggleModal} />
      )}
    </AppStyles>
  );
}
