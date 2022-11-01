import FavoritesItem from '../favorites-item/favorites-item';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';

type FavoritesListProps = {
  offers: Offer[];
}

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  const [, setActiveOffer] = useState<number | null>(null);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const uniqueCities = [...new Set(favoriteOffers.map(({city}) => city.name))];

  const handleOfferMouseEnter = (offerId: number | null) => {
    setActiveOffer(offerId);
  };

  return (
    <ul className="favorites__list">

      {uniqueCities.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/#">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {offers.map((offer) =>
              offer.city.name === city
                &&
                <FavoritesItem
                  offer={offer}
                  onMouseEnter={handleOfferMouseEnter}
                />
            )}
          </div>
        </li>)
      )}
    </ul>
  );
}

export default FavoritesList;
