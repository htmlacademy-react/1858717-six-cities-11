import { SortType } from './const';
import { Offer } from './types/offers';

export const getOffersByCity = (city: string, offers: Offer[]) =>
  offers.filter((offer) => offer.city.name === city);

export const sortByPriceAscending = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;

export const sortByPriceDescending = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

export const sortByRating = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

export const getSortedOffers = (offers: Offer[], sortType: string) => {
  const sortedOffers = offers.slice();

  switch (sortType) {
    case SortType.Default:
      return sortedOffers;
    case SortType.Ascending:
      return sortedOffers.sort(sortByPriceAscending);
    case SortType.Descending:
      return sortedOffers.sort(sortByPriceDescending);
    case SortType.TopRated:
      return sortedOffers.sort(sortByRating);
    default:
      throw new Error('Unknown sorting type');
  }
};
