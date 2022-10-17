import css from './Button.module.css';

export const Button = ({ moreLoadButtonClick }) => {
  return (
    <button
      type="button"
      onClick={moreLoadButtonClick}
      className={css['loadMore-btn']}
    >
      Load More
    </button>
  );
};

export default Button;
