import React, { useEffect, useState } from 'react';
// import data from '../Mock/cryptoData';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const CRYPTO_COINS_ENDPOINT = 'https://api.nomics.com/v1/currencies/ticker?key=70fbd3b277ba43c183a1ff59c0e24fe2158ef9b6&';

const USD_BRL_ENDPOINT = 'https://economia.awesomeapi.com.br/last/USD-BRL';

function AllCryptos() {
  const [allCryptosData, setAllCryptosData] = useState([]);
  const [usdBrlValue, setUsdBrlValue] = useState(0);
  const [favoriteCryptos, setFavoriteCryptos] = useState([]);
  const requestCryptosFromApi = async () => {
    const response = await fetch(CRYPTO_COINS_ENDPOINT);
    const responseJSON = await response.json();
    const sortResponse = responseJSON.sort((a, b) => a.name.localeCompare(b.name));
    setAllCryptosData(sortResponse);
  };

  const requestUsdBrlValue = async () => {
    const response = await fetch(USD_BRL_ENDPOINT);
    const responseJSON = await response.json();
    setUsdBrlValue(responseJSON.USDBRL.bid);
  };

  const isFavorite = (element) => {
    const favorites = JSON.parse(localStorage.getItem('favoriteCryptos'));
    if (favorites.some((crypto) => crypto === element)) {
      const exclude = favorites.filter((crypto) => crypto !== element);
      localStorage.setItem('favoriteCryptos', JSON.stringify(exclude));
      return;
    }
    localStorage.setItem('favoriteCryptos', JSON.stringify([...favorites, element]));
    console.log(favoriteCryptos);
  };

  useEffect(() => {
    requestCryptosFromApi();
    requestUsdBrlValue();
    setInterval(() => requestCryptosFromApi(), 30000);
  }, []);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('favoriteCryptos'))) {
      localStorage.setItem('favoriteCryptos', JSON.stringify([]));
    } else {
      const favorites = JSON.parse(localStorage.getItem('favoriteCryptos'));
      console.log(favorites);
      setFavoriteCryptos(favorites);
    }
  }, []);

  return (
    <div>
      <h1>
        Coisinha Site Cryptos.com
      </h1>
      <div className="cryptos-main-container">
        {allCryptosData.length > 0 && (allCryptosData.map((crypto) => (
          <div key={crypto.id} className="crypto-card">
            <h1>{crypto.name}</h1>
            <img className="crypto-image" src={crypto.logo_url} alt={crypto.id} />
            <h2>{`US$ ${Number(crypto.price).toFixed(2)}`}</h2>
            <h2>{`R$ ${(Number(crypto.price) * Number(usdBrlValue)).toFixed(2)}`}</h2>
            <p>
              {`Maior alta US$ ${Number(crypto.high).toFixed(2)}`}
            </p>
            <button
              type="button"
              onClick={() => isFavorite(crypto.id)}
            >
              <img
                className="crypto-card-favorite-button"
                src={whiteHeartIcon}
                alt="favoriteIcon"
              />
            </button>
          </div>
        )))}
      </div>
    </div>
  );
}

export default AllCryptos;
