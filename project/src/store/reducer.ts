import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, changeSortType } from './action';
import { INITIAL_CITY, SortType } from '../const';

const initialState = {
  city: INITIAL_CITY,
  offers,
  sortType: SortType.Default
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
    });
});

export {reducer};
