import { Review } from '../types/reviews';

export const reviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Fri Oct 28 2022 13:57:39 GMT+0200 (Центральная Европа, летнее время)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Olivia.conner'
    }
  },
  {
    comment: 'I don\'t like it at all. It was dirty and too small for me.',
    date: 'Wed Dec 17 2021 18:40:39 GMT+0200 (Центральная Европа, летнее время)',
    id: 2,
    rating: 2,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Capuccino'
    }
  },
];
