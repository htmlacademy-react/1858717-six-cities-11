import { NameSpace, SortType } from '../../const';
import { State } from '../../types/state';

export const getCity = (state: State): string => state[NameSpace.Ui].city;

export const getSortType = (state: State): SortType => state[NameSpace.Ui].sortType;
