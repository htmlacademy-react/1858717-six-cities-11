import { AxiosError, AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types/offers';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { Review, ReviewFormData } from '../types/reviews';
import { pushNotification } from './notifications/notifications';
import { StatusCodes } from 'http-status-codes';
import { FavoritePayload } from '../types/favorite-payload';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Hotels);
      return data;
    } catch(err) {
      return rejectWithValue(err);
    }

  },
);

export const fetchPropertyAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchProperty',
  async(id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Hotels}/${id}`);

      return data;
    } catch(err) {
      if(err instanceof AxiosError) {
        if(err.response?.status === StatusCodes.NOT_FOUND) {
          dispatch(redirectToRoute(AppRoute.NotFound));
        }
      }
      dispatch(pushNotification({type: 'error', message: 'Can not download property'}));
      throw err;
    }
  }
);

export const fetchCommentsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchComments',
  async(id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);

      return data;
    } catch(err) {
      dispatch(pushNotification({type: 'warning', message: 'Sorry, can not download reviews.'}));

      throw err;
    }
  }
);

export const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchFavorites',
  async(_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Favorites);

      return data;
    } catch(err) {
      dispatch(pushNotification({type: 'error', message: 'Can not download favorite hotels'}));

      throw err;
    }
  }
);

export const fetchNearbyAction = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchNearby',
  async(id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(`${APIRoute.Hotels}/${id}/nearby`);

      return data;
    } catch(err) {
      dispatch(pushNotification({type: 'warning', message: 'Sorry, can not download near places.'}));

      throw err;
    }
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
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Root));

      return data;
    } catch(err) {
      dispatch(pushNotification({type: 'error', message: 'Failed on login. Please try again'}));

      throw err;
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async(_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
    } catch{
      dispatch(pushNotification({type: 'error', message: 'Cannot complete logout. Please, try again.'}));
    }
  }
);

export const postCommentAction = createAsyncThunk<Review[], ReviewFormData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'ui/postComment',
  async({id, comment, rating}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${id}`, {comment, rating});

      return data;
    } catch(err) {
      dispatch(pushNotification({type: 'error', message: 'Can not send review. Please, try again'}));

      throw err;
    }
  }
);

export const postFavoritesAction = createAsyncThunk<Offer, FavoritePayload, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'ui/postFavorite',
  async({id, status}, {dispatch, extra: api}) => {
    try {
      const { data } = await api.post<Offer>(`${APIRoute.Favorites}/${id}/${status}`);
      return data;
    } catch(err) {
      dispatch(pushNotification({type: 'error', message: 'Can not add to favorites. Try again'}));

      throw err;
    }
  }
);
