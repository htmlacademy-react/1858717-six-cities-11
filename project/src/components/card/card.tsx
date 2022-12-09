import { Offer } from '../../types/offers';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute, MAX_RATING } from '../../const';
import BookmarksButton from '../bookmarks-button/bookmarks-button';
import cn from 'classnames';
import { useAppDispatch } from '../../hooks';
import { postFavoritesAction } from '../../store/api-actions';
import { useEffect, useState } from 'react';

type CardProps = {
  offer: Offer;
  onOfferMouseEnter?: (offerId: number | null) => void;
  place: 'city' | 'near' | 'favorite';
};

const classes = {
  city: {
    className: 'cities',
    imgWidth: 260,
    imgHeight: 200
  },
  near: {
    className: 'near-places',
    imgWidth: 260,
    imgHeight: 200
  },
  favorite: {
    className: 'favorites',
    imgWidth: 150,
    imgHeight: 110
  }
};

function Card({offer, onOfferMouseEnter, place}: CardProps): JSX.Element {
  const {isPremium, previewImage, price, title, type, rating, isFavorite} = offer;
  const typeOfAprt = type[0].toUpperCase() + type.slice(1);
  const ratingInPercent = (Math.round(rating) * 100) / MAX_RATING;
  const dispatch = useAppDispatch();
  const [isFavoriteStatus, setFavorite] = useState(isFavorite);
  const { className, imgWidth, imgHeight } = classes[place];

  useEffect(() => {
    setFavorite(isFavorite);
  }, [isFavorite]);

  const infoClassName = cn('place-card__info',
    {
      'favorites__card-info': place === 'favorite'
    });

  const handleFavoriteButtonClick = () => {
    const data = {
      id: offer.id,
      status: Number(!isFavoriteStatus)
    };
    setFavorite(!isFavoriteStatus);
    dispatch(postFavoritesAction(data));
  };

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={() => onOfferMouseEnter?.(offer.id)}
      onMouseLeave={() => onOfferMouseEnter?.(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link
          to={`${AppRoute.Root}${generatePath(AppRoute.Offer, { id: String(offer.id)})}`}
        >
          <img className="place-card__image" src={previewImage} width={imgWidth} height={imgHeight} alt="Place" />
        </Link>
      </div>
      <div className={infoClassName}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarksButton
            isActive={isFavoriteStatus ? '__bookmark-button--active' : false}
            size="small"
            page="place-card"
            onClick={handleFavoriteButtonClick}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingInPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`${AppRoute.Root}${generatePath(AppRoute.Offer, { id: String(offer.id)})}`}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{typeOfAprt}</p>
      </div>
    </article>
  );
}

export default Card;
