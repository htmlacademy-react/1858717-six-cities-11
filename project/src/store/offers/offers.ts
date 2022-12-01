import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import { fetchOffersAction, fetchPropertyAction } from '../api-actions';

type Offers = {
  offers: Offer[];
  property: Offer | null;
  fetchStatus: FetchStatus;
}

const initialState: Offers = {
  offers: [],
  property: null,
  fetchStatus: FetchStatus.Idle
};

export const offers = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.fetchStatus = FetchStatus.Pending;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.fetchStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.fetchStatus = FetchStatus.Error;
      })
      .addCase(fetchPropertyAction.pending, (state) => {
        state.fetchStatus = FetchStatus.Pending;
      })
      .addCase(fetchPropertyAction.fulfilled, (state, action) => {
        state.property = action.payload;
        state.fetchStatus = FetchStatus.Success;
      });
  },
});
