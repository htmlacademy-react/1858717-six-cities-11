import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity } from './action';
import { INITIAL_CITY } from '../const';

const initialState = {
  city: INITIAL_CITY,
  offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    });
});

export {reducer};
