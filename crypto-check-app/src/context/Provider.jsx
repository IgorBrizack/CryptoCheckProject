import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import context from './Context';

// const CRYPTO_COINS_ENDPOINT = 'https://api.nomics.com/v1/currencies/ticker?key=70fbd3b277ba43c183a1ff59c0e24fe2158ef9b6&';

function Provider({ children }) {
  // const requestCryptosFromApi = async () => {
  //   const response = await fetch(CRYPTO_COINS_ENDPOINT);
  //   const responseJSON = await response.json();
  //   return (responseJSON);
  // };

  const providerState = useMemo(() => ({ }), []);

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
