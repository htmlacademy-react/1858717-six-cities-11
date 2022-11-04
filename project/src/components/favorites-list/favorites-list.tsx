import FavoritesItem from '../favorites-item/favorites-item';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';

type FavoritesListProps = {
  offers: Offer[];
}

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  const offersByCity = favoriteOffers.reduce<{ [key: string]: Offer[] }>(( acc, cur ) =>
  {
    if (!acc[cur.city.name]) {
      acc[cur.city.name] = [];
    }
    acc[cur.city.name].push(cur);

    return acc;
  }, {});

  return (
    <ul className="favorites__list">
      {Object.keys(offersByCity).map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/#">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {offersByCity[city].map((offer) =>
              offer.city.name === city
          &&
          <FavoritesItem
            offer={offer}
          />
            )}
          </div>
        </li>))}
    </ul>
  );
}

export default FavoritesList;
