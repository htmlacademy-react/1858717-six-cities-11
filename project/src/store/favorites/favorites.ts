import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import { deleteFavoriteAction, fetchFavoritesAction, postFavoritesAction } from '../api-actions';

type Favorites = {
  favorites: Offer[];
  fetchStatus: FetchStatus;
  postStatus: FetchStatus;
  deleteStatus: FetchStatus;
}

const initialState: Favorites = {
  favorites: [],
  fetchStatus: FetchStatus.Idle,
  postStatus: FetchStatus.Idle,
  deleteStatus: FetchStatus.Idle
};

export const favorites = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.fetchStatus = FetchStatus.Pending;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.Success;
        state.favorites = action.payload;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.fetchStatus = FetchStatus.Error;
      })
      .addCase(postFavoritesAction.pending, (state) => {
        state.postStatus = FetchStatus.Pending;
      })
      .addCase(postFavoritesAction.fulfilled, (state, action) => {
        state.postStatus = FetchStatus.Success;
        state.favorites.push(action.payload);
      })
      .addCase(postFavoritesAction.rejected, (state) => {
        state.postStatus = FetchStatus.Error;
      })
      .addCase(deleteFavoriteAction.pending, (state) => {
        state.deleteStatus = FetchStatus.Pending;
      })
      .addCase(deleteFavoriteAction.fulfilled, (state, action) => {
        state.deleteStatus = FetchStatus.Success;
        state.favorites = state.favorites.filter(({id}) => id !== action.payload.id);
      })
      .addCase(deleteFavoriteAction.rejected, (state) => {
        state.deleteStatus = FetchStatus.Error;
      });
  }
});
