import { Offer } from '../../types/offers';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute, MAX_RATING } from '../../const';
import BookmarksButton from '../bookmarks-button/bookmarks-button';
import { useAppDispatch } from '../../hooks';
import { postFavoritesAction } from '../../store/api-actions';

type FavoritesItemProps = {
  offer: Offer;
};

function FavoritesItem({offer}: FavoritesItemProps): JSX.Element {
  const {isPremium, previewImage, price, title, type, rating, id, isFavorite} = offer;
  const dispatch = useAppDispatch();
  const typeOfAprt = type[0].toUpperCase() + type.slice(1);
  const ratingInPercent = (rating * 100) / MAX_RATING;

  const handleFavoriteButtonClick = () => {
    dispatch(postFavoritesAction({
      id,
      status: Number(!isFavorite)
    }));
  };

  return (
    <article
      className="favorites__card place-card"
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link
          to={`${AppRoute.Root}${generatePath(AppRoute.Offer, { id: String(offer.id)})}`}
        >
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarksButton
            isActive={isFavorite}
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

export default FavoritesItem;
