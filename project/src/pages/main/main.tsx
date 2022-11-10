import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import Layout from '../../components/layout/layout';
import CitiesMenu from '../../components/cities-menu/cities-menu';
import SortingForm from '../../components/sorting-form/sorting-form';
import { Offer } from '../../types/offers';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

type MainProp = {
  offers: Offer[];
};

function Main({offers}: MainProp): JSX.Element {
  const [, setActiveOffer] = useState<number | null>(null);
  const handleOfferMouseEnter = (offerId: number | null) => {
    setActiveOffer(offerId);
  };

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
          <CitiesMenu />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>
                <SortingForm />
                <CardsList offers={offers} place="city" onOfferMouseEnter={handleOfferMouseEnter} />
              </section>
              <div className="cities__right-section">
                <Map className={'cities__map'} offers={offers} city={offers[0].city.location} selectedOffer={undefined}/>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default Main;
