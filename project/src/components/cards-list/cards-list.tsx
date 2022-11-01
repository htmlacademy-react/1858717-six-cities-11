import { useState } from 'react';
import Card from '../card/card';
import { Offer } from '../../types/offers';

type CardListProps = {
  offers: Offer[];
};

function CardsList({offers}: CardListProps): JSX.Element {
  const [, setActiveOffer] = useState<number | null>(null);

  const handleOfferMouseEnter = (offerId: number | null) => {
    setActiveOffer(offerId);
  };

  return (
    <div className="cities__places-list">
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          onMouseEnter={handleOfferMouseEnter}
        />
      ))}
    </div>);
}

export default CardsList;
