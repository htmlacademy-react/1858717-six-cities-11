import { createAction } from '@reduxjs/toolkit';
import { SortType, AuthorizationStatus, AppRoute } from '../const';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';
import { UserData } from '../types/user-data';

export const changeCity = createAction<{city: string}>('offer/changeCity');

export const changeSortType = createAction<{sortType: SortType}>('offer/changeSortType');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadComments = createAction<Review[]>('data/loadComments');

export const loadFavorites = createAction<Offer[]>('data/loadFavorites');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');

export const setUser = createAction<UserData | null>('user/setUser');
