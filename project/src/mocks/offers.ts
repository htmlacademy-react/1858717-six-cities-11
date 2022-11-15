import { Offer } from '../types/offers';

export const offers: Offer[] = [
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Towels'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: 'img/apartment-small-03.jpg',
    price: 160,
    rating: 4.2,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam'
    },
    description: 'Wonderful place in the heart of Hamburg.',
    goods: [
      'Heating',
      'Wi-Fi',
      'Towels',
      'Cabel TV'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    },
    id: 2,
    images: [
      'img/room.jpg'
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/room-small.jpg',
    price: 60,
    rating: 5.0,
    title: 'Cozy and clean room in the centre.',
    type: 'private room'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam'
    },
    description: 'A light and cozy apartment in romantic Paris.',
    goods: [
      'Heating',
      'Wi-Fi',
      'Towels',
      'Parking',
      'Cofee machine'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: true,
      name: 'Mariia',
    },
    id: 3,
    images: [
      'img/studio-01.jpg',
      'img/studio-photos.jpg'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-small-04.jpg',
    price: 150,
    rating: 4.0,
    title: 'Studio for all who love comfort and style.',
    type: 'studio'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam'
    },
    description: 'Great place for family near the park',
    goods: [
      'Kitchen',
      'Fridge',
      'Heating',
      'Towels',
      'Baby coat',
      'Washing machine'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 7,
      isPro: false,
      name: 'Roberto',
    },
    id: 6,
    images: [
      'img/apartment-03.jpg'
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: 'img/apartment-small-03.jpg',
    price: 90,
    rating: 3.3,
    title: 'Apartment for a big family.',
    type: 'apartment'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 48.8534100,
        longitude: 2.3488000,
        zoom: 10,
      },
      name: 'Paris'
    },
    description: 'Super place in Paris',
    goods: [
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Towels'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 10,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 48.8534100,
      longitude: 2.3488000,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: 'img/apartment-small-03.jpg',
    price: 160,
    rating: 4.2,
    title: 'Super apartment',
    type: 'apartment'
  }
];
