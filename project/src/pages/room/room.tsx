import Map from '../../components/map/map';
import Layout from '../../components/layout/layout';
import BookmarksButton from '../../components/bookmarks-button/bookmarks-button';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import Reviews from '../../components/reviews/reviews';
import HostInfo from '../../components/host/host';
import CardsList from '../../components/cards-list/cards-list';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoute, FetchStatus, MAX_RATING } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getNearbyOffers, getProperty, getPropertyFetchStatus } from '../../store/offers/selectors';
import { fetchCommentsAction, fetchNearbyAction, fetchPropertyAction } from '../../store/api-actions';
import { FullPageSpinner } from '../../components/fullpage-spinner/fullpage-spinner';
import ErrorScreen from '../error-screen/error-screen';

function Room(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const fetchPropertyStatus = useAppSelector(getPropertyFetchStatus);

  useEffect(()=> {
    window.scrollTo(0, 0);
    if (id) {
      dispatch(fetchPropertyAction(id));
      dispatch(fetchCommentsAction(id));
      dispatch(fetchNearbyAction(id));
    }
  }, []);

  const property = useAppSelector(getProperty);
  const nearPlaces = useAppSelector(getNearbyOffers);

  if (fetchPropertyStatus === FetchStatus.Pending) {
    return <FullPageSpinner size={'big'} />;
  }

  if (fetchPropertyStatus === FetchStatus.Error) {
    return <ErrorScreen />;
  }

  if (property) {
    const {
      images,
      type,
      isPremium,
      title,
      rating,
      bedrooms,
      maxAdults,
      price,
      goods,
      host,
      description,
      isFavorite,
      city
    } = property;
    const typeOfAprt = type[0].toUpperCase() + type.slice(1);
    const ratingInPercent = (rating * 100) / MAX_RATING;

    return (
      <div className="page">
        <Helmet>
          <title>
          6 cities|Property
          </title>
        </Helmet>
        <Layout>
          <main className="page__main page__main--property">
            <section className="property">
              <PropertyGallery images={images} type={type}/>
              <div className="property__container container">
                <div className="property__wrapper">
                  {isPremium && (
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                  )}

                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {title}
                    </h1>
                    <BookmarksButton
                      isActive={isFavorite ? '__bookmark-button--active' : false}
                      size="big"
                      page="property"
                    />
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: `${ratingInPercent}%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{rating}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      {typeOfAprt}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {bedrooms} Bedrooms
                    </li>
                    <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">

                      {goods.map((good) => (
                        <li className="property__inside-item" key={good}>
                          {good}
                        </li>
                      ))}

                    </ul>
                  </div>
                  <HostInfo host={host} description={description}/>
                  <Reviews />
                </div>
              </div>
              <Map className="property__map" city={city.location} offers={nearPlaces} selectedOffer={property.id}/>
            </section>
            {nearPlaces.length > 0 &&
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <CardsList offers={nearPlaces} place="near" />
              </section>
            </div>}
          </main>
        </Layout>
      </div>
    );
  }
  return (
    <Navigate to={`${AppRoute.Root}${AppRoute.NotFound}`}/>
  );
}

export default Room;
