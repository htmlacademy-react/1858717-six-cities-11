import Card from '../card/card';
import { Offer } from '../../types/offers';

type CardListProps = {
  offers: Offer[];
  place: 'city' | 'near';
  onOfferMouseEnter?: (offerId: number | null) => void;
};

const classes = {
  city: 'cities__places-list',
  near: 'near-places__list'
};

function CardsList({ offers, place, onOfferMouseEnter }: CardListProps): JSX.Element {

  const className = classes[place];

  return (
    <div className={className}>
      {offers.map((offer) => (
        <Card
          offer={offer}
          key={offer.id}
          onOfferMouseEnter={onOfferMouseEnter}
          place={place}
        />
      ))}
    </div>);
}

export default CardsList;
