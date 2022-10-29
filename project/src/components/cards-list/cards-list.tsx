import { useState } from 'react';
import Card from '../card/card';
import { Offer } from '../../types/offers';

type CardListProps = {
  offers: Offer[];
};

function CardsList({offers}: CardListProps): JSX.Element {
  const [, setActiveOffer] = useState(0);

  const handleOfferMouseEnter = (offerId: number) => {
    setActiveOffer(offerId);
  };

  const handleOfferMouseLeave = () => {
    setActiveOffer(0);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          onMouseEnter={handleOfferMouseEnter}
          onMouseLeave={handleOfferMouseLeave}
        />
      ))}
    </div>);
}

export default CardsList;
