import { NameSpace, AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getUser = (state: State): UserData | null => state[NameSpace.User].user;

export const getLoginLoadingStatus = (state: State): boolean =>
  state[NameSpace.User].isLoginDataLoading;
