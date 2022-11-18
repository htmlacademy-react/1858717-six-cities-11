import { createAction } from '@reduxjs/toolkit';
import { SortType } from '../const';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';

export const changeCity = createAction<{city: string}>('offer/changeCity');

export const changeSortType = createAction<{sortType: SortType}>('offer/changeSortType');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadComments = createAction<Review[]>('data/loadComments');

export const setError = createAction<string | null>('offer/setError');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
