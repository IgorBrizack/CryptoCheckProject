import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';
import context from './Context';

function Provider({ children }) {
  const [filtered, setFilter] = useState({ typeOfSearch: '', value: '' });
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredContent, setFilteredContent] = useState([]);

  const providerState = useMemo(() => ({
    setFilter,
    filtered,
    isFiltered,
    setIsFiltered,
    setFilteredContent,
    filteredContent,
  }), [isFiltered, filtered]);

  return (
    <context.Provider value={providerState}>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.string,
}.isrequired;

export default Provider;
