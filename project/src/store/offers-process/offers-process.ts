import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, INITIAL_CITY, SortType } from '../../const';
import { OffersProcess} from '../../types/state';

const initialState: OffersProcess = {
  city: INITIAL_CITY,
  sortType: SortType.Default
};

export const offersProcess = createSlice({
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

export const { changeCity, changeSortType } = offersProcess.actions;
