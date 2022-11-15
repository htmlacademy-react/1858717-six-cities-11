import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import Layout from '../../components/layout/layout';
import CitiesMenu from '../../components/cities-menu/cities-menu';
import SortingForm from '../../components/sorting-form/sorting-form';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/index';
import { getOffersByCity } from '../../offer';

function Main(): JSX.Element {
  const [currentOffer, setActiveOffer] = useState<number | null>(null);
  const handleOfferMouseEnter = (offerId: number | null) => {
    setActiveOffer(offerId);
  };

  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  const offersByCity = getOffersByCity(currentCity, offers);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>
          6 cities
        </title>
      </Helmet>
      <Layout>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CitiesMenu currentCity={currentCity}/>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {`${offersByCity.length} places to stay in ${currentCity}`}
                </b>
                <SortingForm />
                <CardsList offers={offersByCity} place="city" onOfferMouseEnter={handleOfferMouseEnter} />
              </section>
              <div className="cities__right-section">
                <Map className={'cities__map'} offers={offersByCity} city={offersByCity[0].city.location} selectedOffer={currentOffer} />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default Main;
