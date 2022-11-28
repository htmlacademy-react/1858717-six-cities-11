import { store } from '../store';
import { AuthorizationStatus, SortType } from '../const';
import { UserData } from './user-data';
import { Offer } from './offers';
import { Review } from './reviews';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: null | UserData;
  isLoginDataLoading: boolean;
}

export type OffersData = {
  offers: Offer[];
  comments: Review[];
  favorites: Offer[];
  isOffersDataLoading: boolean;
  hasError: boolean;
  property: Offer | null;
}

export type OffersProcess = {
  city: string;
  sortType: SortType;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
