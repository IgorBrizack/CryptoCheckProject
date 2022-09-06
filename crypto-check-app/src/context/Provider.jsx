import React, { useState } from 'react';
import propTypes from 'prop-types';
import context from './Context';

function Provider({ children }) {
  const [filtered, setFilter] = useState({
    typeOfSearch: '',
    value: '',
  });
  const [isFiltered, setIsFiltered] = useState(false);
  const [check, setCheck] = useState();

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const providerState = {
    setFilter,
    filtered,
    isFiltered,
    setIsFiltered,
    setCheck,
    check,
  };

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
