import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import css from './Searchbar.module.css';
const Searchbar = ({ getNewName }) => {
  const [name, setName] = useState('');

  const onChangeInput = e => {
    setName(e.target.value);
  };
  const getDataFromInput = e => {
    e.preventDefault();
    getNewName(name);
    console.log(name);
    setName('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={getDataFromInput}>
        <button type="submit" className={css.button}>
          <span className="button-label">
            <ImSearch />
          </span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="name"
          value={name}
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
};

export default Searchbar;
