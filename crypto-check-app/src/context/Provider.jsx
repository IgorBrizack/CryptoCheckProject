import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import context from './Context';

function Provider({ children }) {
  const [filtered, setFilter] = useState();
  const [isFiltered, setIsFiltered] = useState(false);
  const [check, setCheck] = useState();

  useEffect(() => {
    console.log('provider check', check);
    console.log('provider filtered', filtered);
    console.log('provider is filtered', isFiltered);
  }, [check, isFiltered, filtered]);

  useEffect(() => {
    console.log(filtered, check, 'console vindo do provider');
  }, [check]);

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
