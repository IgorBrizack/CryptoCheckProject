import React, { useMemo, useState } from 'react';
import propTypes from 'prop-types';
import context from './Context';

// const CRYPTO_COINS_ENDPOINT = 'https://api.nomics.com/v1/currencies/ticker?key=70fbd3b277ba43c183a1ff59c0e24fe2158ef9b6&';

function Provider({ children }) {
  const [filtered, setFilter] = useState(false);

  const providerState = useMemo(() => ({
    setFilter,
    filtered,
  }), []);

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
