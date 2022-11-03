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

export const RatingTitles: {[key: string]: string} = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly'
} as const;
