import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { Review } from '../../types/reviews';
import { fetchCommentsAction } from '../api-actions';

type Comments = {
  comments: Review[];
  fetchStatus: FetchStatus;
}

const initialState: Comments = {
  comments: [],
  fetchStatus: FetchStatus.Idle
};

export const comments = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.fetchStatus = FetchStatus.Pending;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.Success;
        state.comments = action.payload;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.fetchStatus = FetchStatus.Error;
      });
  }
});
