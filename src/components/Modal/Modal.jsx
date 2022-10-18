import { useEffect } from 'react';
import css from './Modal.module.css';
import { SlClose } from 'react-icons/sl';

export const Modal = ({ img, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeByEscape);
    return () => window.removeEventListener('keydown', closeByEscape);
  }, [closeModal]);

  const closeByEscape = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const closeByBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div className={css.overlay} onClick={closeByBackdrop}>
      <div className={css.modal}>
        <img src={img} alt="" />
      </div>
      <button type="button" className={css.button} onClick={closeModal}>
        <SlClose />
      </button>
    </div>
  );
};

export default Modal;
