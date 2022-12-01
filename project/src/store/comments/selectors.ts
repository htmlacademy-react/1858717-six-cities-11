import { FetchStatus, NameSpace } from '../../const';
import { Review } from '../../types/reviews';
import { State } from '../../types/state';

export const getComments = (state: State): Review[] => state[NameSpace.Comments].comments;

export const getCommentsFetchStatus = (state: State): FetchStatus =>
  state[NameSpace.Comments].fetchStatus;
