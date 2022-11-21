import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortType, loadComments, loadOffers, setOffersDataLoadingStatus, requireAuthorization, setUser, loadFavorites } from './action';
import { INITIAL_CITY, SortType, AuthorizationStatus } from '../const';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';
import { UserData } from '../types/user-data';

type InitialState = {
  city: string;
  offers: Offer[];
  comments: Review[];
  sortType: SortType;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
  favorites: Offer[];
}

const initialState: InitialState = {
  city: INITIAL_CITY,
  offers: [],
  comments: [],
  sortType: SortType.Default,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknow,
  user: null,
  favorites: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(changeSortType, (state, action) => {
      const { sortType } = action.payload;
      state.sortType = sortType;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
