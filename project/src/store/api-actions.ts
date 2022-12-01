import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types/offers';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { Review } from '../types/reviews';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    return data;
  },
);

export const fetchPropertyAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchProperty',
  async(id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoute.Hotels}${id}`);

    return data;
  }
);

export const fetchCommentsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchComments',
  async(id, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}${id}`);

    return data;
  }
);

export const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchFavorites',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorites);

    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));

    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async(_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
