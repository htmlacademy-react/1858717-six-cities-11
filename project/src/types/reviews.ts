import { Host } from './offers';

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Host;
}

export type ReviewFormData = {
  comment: string;
  rating: number;
  id: number;
}
