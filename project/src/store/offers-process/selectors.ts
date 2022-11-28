import { NameSpace, SortType } from '../../const';
import { State } from '../../types/state';

export const getCity = (state: State): string => state[NameSpace.Offer].city;

export const getSortType = (state: State): SortType => state[NameSpace.Offer].sortType;
