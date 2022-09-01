import React, { useContext } from 'react';
import context from '../context/Context';

function Header() {
  const { setFilter } = useContext(context);

  const handleChange = ({ target }) => {
    if (target.name === 'searchInput') setFilter({ typeOfSearch: 'text', value: target.value });
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
      </div>
    </header>
  );
}

export default Header;
