export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = 'offer/:id',
  Root = '/',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknow = 'UNKNOW'
}

export const MAX_RATING = 5;
