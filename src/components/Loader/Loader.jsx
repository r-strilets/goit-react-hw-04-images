import css from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={css['lds-ring']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
