import React, { useContext, useState } from 'react';
import context from '../context/Context';

function Header() {
  const {
    setFilter,
    setCheck,
  } = useContext(context);

  const qualquer = useContext(context);
  console.log('qualquer', qualquer);

  const [search, setSearch] = useState([]);

  const handleChange = ({ target }) => {
    if (target.name === 'searchInput' && target.value.length > 0) setSearch({ typeOfSearch: 'text', value: target.value });
    if (target.name === 'searchInput' && target.value.length === 0) setSearch({ typeOfSearch: '', value: '' });
  };

  const execSearch = () => {
    setCheck(true);
    setFilter(search);
  };

  return (
    <header>
      <h1>cryptos check</h1>
      <div>
        <label htmlFor="searchInput">
          <input
            onChange={(e) => handleChange(e)}
            placeholder="buscar"
            data-testid="search-input"
            name="searchInput"
            id="searchInput"
            type="text"
            className="inputText"
          />
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={() => execSearch()}
        >
          Buscar
        </button>
      </div>
    </header>
  );
}

export default Header;
