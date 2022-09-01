import React, { useEffect, useState, useContext } from 'react';
import context from '../context/Context';
import FavoriteButton from '../components/FavoriteButton';
import Header from '../components/Header';

const CRYPTO_COINS_ENDPOINT = 'https://api.nomics.com/v1/currencies/ticker?key=70fbd3b277ba43c183a1ff59c0e24fe2158ef9b6&';

const USD_BRL_ENDPOINT = 'https://economia.awesomeapi.com.br/last/USD-BRL';

function AllCryptos() {
  const {
    filtered,
    setFilteredContent,
    filtered: { typeOfSearch, value },
    filteredContent,
  } = useContext(context);

  const [allCryptosData, setAllCryptosData] = useState([]);
  const [usdBrlValue, setUsdBrlValue] = useState(0);

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

  useEffect(() => {
    requestCryptosFromApi();
    requestUsdBrlValue();
    setInterval(() => requestCryptosFromApi(), 30000);
  }, []);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('favoriteCryptos'))) {
      localStorage.setItem('favoriteCryptos', JSON.stringify([]));
    }
  }, []);

  const filterFunction = () => {
    console.log(filtered.typeOfSearch);
    let newContent;
    switch (typeOfSearch) {
      case 'text': {
        const content = allCryptosData.filter((coin) => coin.name.includes(value));
        newContent = content;
        console.log('chegando aqui');
        break;
      }
      default: {
        const content = allCryptosData;
        newContent = content;
      }
    }
    setFilteredContent(newContent);
  };

  useEffect(() => {
    if (filtered.value.length > 0) filterFunction();
  }, [filtered]);

  return (
    <div>
      <Header />
      {filteredContent.length > 0 ? (
        <div className="cryptos-main-container">
          {filteredContent.map((crypto) => (
            <div key={crypto.id} className="crypto-card">
              <h1>{crypto.name}</h1>
              <img className="crypto-image" src={crypto.logo_url} alt={crypto.id} />
              <h2>{`US$ ${Number(crypto.price).toFixed(2)}`}</h2>
              <h2>{`R$ ${(Number(crypto.price) * Number(usdBrlValue)).toFixed(2)}`}</h2>
              <p>
                {`Maior alta US$ ${Number(crypto.high).toFixed(2)}`}
              </p>
              <FavoriteButton
                cryptoId={crypto.id}
              />
            </div>
          ))}
        </div>
      ) : (
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
              <FavoriteButton
                cryptoId={crypto.id}
              />
            </div>
          )))}
        </div>

      )}

    </div>
  );
}

export default AllCryptos;
