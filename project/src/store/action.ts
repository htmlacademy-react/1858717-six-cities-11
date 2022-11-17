import { createAction } from '@reduxjs/toolkit';
import { SortType } from '../const';

export const changeCity = createAction<{city: string}>('offer/changeCity');

export const changeSortType = createAction<{sortType: SortType}>('offer/changeSortType');

