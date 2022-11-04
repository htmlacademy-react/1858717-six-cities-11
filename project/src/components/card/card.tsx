import { Offer } from '../../types/offers';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute, MAX_RATING } from '../../const';
import BookmarksButton from '../bookmarks-button/bookmarks-button';

type CardProps = {
  offer: Offer;
  onMouseEnter: (offerId: number | null) => void;
};

function Card({offer, onMouseEnter}: CardProps): JSX.Element {
  const {isPremium, previewImage, price, title, type, rating, isFavorite} = offer;
  const typeOfAprt = type[0].toUpperCase() + type.slice(1);
  const ratingInPercent = (rating * 100) / MAX_RATING;

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => onMouseEnter(offer.id)}
      onMouseLeave={() => onMouseEnter(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, { id: String(offer.id)})}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarksButton
            isActive={isFavorite ? '__bookmark-button--active' : false}
            size="small"
            page="place-card"
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingInPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { id: String(offer.id)})}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{typeOfAprt}</p>
      </div>
    </article>
  );
}

export default Card;
