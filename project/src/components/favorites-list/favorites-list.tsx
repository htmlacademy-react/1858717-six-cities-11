import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/offers-data/selectors';
import { Offer } from '../../types/offers';
import Card from '../card/card';

function FavoritesList(): JSX.Element {
  const offers = useAppSelector(getOffers);

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
          <Card
            offer={offer}
            place="favorite"
          />
            )}
          </div>
        </li>))}
    </ul>
  );
}

export default FavoritesList;
