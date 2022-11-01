import { Host } from './offers';

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Host;
}