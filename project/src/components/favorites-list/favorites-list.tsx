import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';
import Card from '../card/card';

type FavoritesListProps = {
  offers: Offer[];
}

function FavoritesList({offers}: FavoritesListProps): JSX.Element {

  const offersByCity = offers.reduce<{ [key: string]: Offer[] }>(( acc, cur ) =>
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
