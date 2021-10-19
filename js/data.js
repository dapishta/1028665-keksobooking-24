const TITLE = 'Лучшее место для отдыха';
const DESCRIPTION = 'Заполните все обязательные поля, назначьте цену, загрузите аватар и фото жилья.';
const MAX_PRICE = 10000;
const MIN_AVATAR = 1;
const MAX_AVATAR = 10;
const MAX_OTHER= 10;
const NUMBER_OF_RELATED_ADS = 10;
const LOCATION =
  {
    lat: {
      from: 35.65000,
      to: 35.70000,
    },
    lng: {
      from: 139.70000,
      to: 139.80000,
    },
  };

const TYPES= [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

export {TITLE, DESCRIPTION, MAX_PRICE, MIN_AVATAR, MAX_AVATAR, MAX_OTHER, NUMBER_OF_RELATED_ADS, LOCATION, TYPES, CHECKINS, CHECKOUTS, FEATURES, PHOTOS};
