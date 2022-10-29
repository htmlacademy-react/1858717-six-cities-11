import { Offer } from '../../types/offers';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type CardProps = {
  offer: Offer;
  onMouseEnter: (offerId: number) => void;
  onMouseLeave: () => void;
};

function Card({offer, onMouseEnter, onMouseLeave}: CardProps): JSX.Element {
  const {isPremium, previewImage, price, title, type, rating} = offer;
  const typeOfAprt = type[0].toUpperCase() + type.slice(1);

  return (
    <article className="cities__card place-card" onMouseEnter={() => onMouseEnter(offer.id)} onMouseLeave={() => onMouseLeave()}>
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) :
        ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Offer.replace(':id', String(offer.id))}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', String(offer.id))}>{title}</Link>
        </h2>
        <p className="place-card__type">{typeOfAprt}</p>
      </div>
    </article>
  );
}

export default Card;
