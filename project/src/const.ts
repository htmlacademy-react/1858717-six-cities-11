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

export const RatingTitles = [
  {value: '5', title: 'perfect'},
  {value: '4', title: 'good'},
  {value: '3', title: 'not bad'},
  {value: '2', title: 'badly'},
  {value: '1', title: 'terribly'}
];

export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';
