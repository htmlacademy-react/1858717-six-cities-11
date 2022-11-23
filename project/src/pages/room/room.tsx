import Map from '../../components/map/map';
import Layout from '../../components/layout/layout';
import BookmarksButton from '../../components/bookmarks-button/bookmarks-button';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import Reviews from '../../components/reviews/reviews';
import HostInfo from '../../components/host/host';
import CardsList from '../../components/cards-list/cards-list';
import { Helmet } from 'react-helmet-async';
import { Review } from '../../types/reviews';
import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoute, MAX_RATING } from '../../const';
import { useAppSelector } from '../../hooks';

type RoomProps = {
  reviews: Review[];
};

function Room({reviews}: RoomProps): JSX.Element {
  const { id } = useParams();
  const offers = useAppSelector((state) => state.offers);
  const property = offers.find((currentOffer) => currentOffer.id === Number(id));

  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [id]);

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
    const nearPlaces = offers.filter((offer) => offer.id !== property.id).slice(0, 3);

    return (
      <div className="page">
        <Helmet>
          <title>
          6 cities|Property
          </title>
        </Helmet>
        <Layout isLoginScreen={false}>
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
                  <Reviews reviews={reviews} />
                </div>
              </div>
              <Map className="property__map" city={city.location} offers={offers} selectedOffer={property.id}/>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                {nearPlaces.length > 0 && <CardsList offers={nearPlaces} place="near" />}
              </section>
            </div>
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
