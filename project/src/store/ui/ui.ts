import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, INITIAL_CITY, SortType } from '../../const';

type UI = {
  city: string;
  sortType: SortType;
}

const initialState: UI = {
  city: INITIAL_CITY,
  sortType: SortType.Default
};

export const ui = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city: string}>) => {
      const { city } = action.payload;
      state.city = city;
    },
    changeSortType: (state, action: PayloadAction<{sortType: SortType}>) => {
      const { sortType } = action.payload;
      state.sortType = sortType;
    }
  }
});

export const { changeCity, changeSortType } = ui.actions;
