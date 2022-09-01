import React, { useContext, useState } from 'react';
import context from '../context/Context';

function Header() {
  const {
    setFilter,
    setIsFiltered,
    isFiltered,
  } = useContext(context);

  const [search, setSearch] = useState([]);

  const handleChange = ({ target }) => {
    if (target.name === 'searchInput') setSearch({ typeOfSearch: 'text', value: target.value });
  };

  const execSearch = () => {
    console.log(isFiltered);
    setFilter(search);
    setIsFiltered(!isFiltered);
  };

  return (
    <header>
      <h1>não sei o que por aca</h1>
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
