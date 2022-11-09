import { useState } from 'react';
import Card from '../card/card';
import { Offer } from '../../types/offers';

type CardListProps = {
  offers: Offer[];
  place: 'city' | 'near';
};

const classes = {
  city: 'cities__places-list',
  near: 'near-places__list'
};

function CardsList({ offers, place }: CardListProps): JSX.Element {
  const [, setActiveOffer] = useState<number | null>(null);

  const handleOfferMouseEnter = (offerId: number | null) => {
    setActiveOffer(offerId);
  };

  const className = classes[place];

  return (
    <div className={className}>
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          handleOfferMouseEnter={handleOfferMouseEnter}
          place={place}
        />
      ))}
    </div>);
}

export default CardsList;
