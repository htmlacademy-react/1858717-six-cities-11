import { NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import { Review } from '../../types/reviews';
import { State } from '../../types/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;

export const getComments = (state: State): Review[] => state[NameSpace.Data].comments;

export const getFavoriteOffers = (state: State): Offer[] =>
  state[NameSpace.Data].favorites;

export const getOffersLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].isOffersDataLoading;

export const getErrorStatus = (state: State): boolean =>
  state[NameSpace.Data].hasError;

export const getProperty = (state: State): Offer | null => state[NameSpace.Data].property;
