import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortType, loadComments, loadOffers, setError, setOffersDataLoadingStatus } from './action';
import { INITIAL_CITY, SortType } from '../const';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';

type InitialState = {
  city: string;
  offers: Offer[];
  comments: Review[];
  sortType: SortType;
  error: string | null;
  isOffersDataLoading: boolean;
}

const initialState: InitialState = {
  city: INITIAL_CITY,
  offers: [],
  comments: [],
  sortType: SortType.Default,
  error: null,
  isOffersDataLoading: false
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
    .addCase(setError,(state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
