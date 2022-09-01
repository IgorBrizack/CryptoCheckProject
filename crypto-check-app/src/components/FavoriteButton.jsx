import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteButton({ cryptoId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const isFavoriteFuntion = (element) => {
    const favorites = JSON.parse(localStorage.getItem('favoriteCryptos'));
    if (favorites.some((crypto) => crypto === element)) {
      return setIsFavorite(true);
    }
    return setIsFavorite(false);
  };

  const toggleFavorite = (element) => {
    const favorites = JSON.parse(localStorage.getItem('favoriteCryptos'));
    if (favorites.some((crypto) => crypto === element)) {
      const exclude = favorites.filter((crypto) => crypto !== element);
      localStorage.setItem('favoriteCryptos', JSON.stringify(exclude));
      setIsFavorite(false);
      return;
    }
    localStorage.setItem('favoriteCryptos', JSON.stringify([...favorites, element]));
    setIsFavorite(true);
  };

  useEffect(() => {
    isFavoriteFuntion(cryptoId);
  }, []);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(cryptoId)}
    >
      <img
        className="crypto-card-favorite-button"
        src={isFavorite ? blackHeartIcon : whiteHeartIcon}
        alt="favoriteIcon"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  cryptoId: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default FavoriteButton;
