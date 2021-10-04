/* eslint-disable prefer-template */

// Fake data

const TITLE = 'Лучшее место для отдыха';
const DESCRIPTION = 'Заполните все обязательные поля, назначьте цену, загрузите аватар и фото жилья. Придумайте интересное описание. Оно сделает объявление более живым и привлекательным. Получившееся объявление должно давать гостям полное представление о вашем жилье.';

const RANDOM_MAX_PRICE = 10000;
const RANDOM_MIN_AVATAR = 1;
const RANDOM_MAX_AVATAR = 10;
const RANDOM_MAX_OTHER= 10;

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

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
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


// Functions

function getRandomPositiveNumber (min, max, numberOfSymbolsAfterComma) {
  if (min < 0) {
    throw new RangeError(`Параметр ${  min  }  должен быть больше 0 `);
  }

  const maxNumber = Math.max(min,max);
  const minNumber = Math.min(min,max);

  const randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;

  return (randomNumber).toFixed(numberOfSymbolsAfterComma);
}


function generateAvatar () {
  let avatar;
  const avatarRandomNumber = getRandomPositiveNumber(RANDOM_MIN_AVATAR,RANDOM_MAX_AVATAR);

  if (avatarRandomNumber<10){
    avatar = 'img/avatars/user0' + avatarRandomNumber + '.png';
  } else {
    avatar = 'img/avatars/user' + avatarRandomNumber + '.png';
  }

  return avatar;
}


function generateFeatures () {
  const featuresNumber = getRandomPositiveNumber(0,FEATURES.length-1);
  const featureList = FEATURES.slice();

  function chooseFeature () {
    const randomIndex = getRandomPositiveNumber(0,featureList.length-1);
    return featureList.splice(randomIndex, 1).toString();
  }

  return Array.from({length: featuresNumber}, chooseFeature);
}


function generatePhotos () {

  function choosePhoto () {
    return PHOTOS[getRandomPositiveNumber(0,PHOTOS.length-1)];
  }

  const numberOfPhotos = getRandomPositiveNumber(0,RANDOM_MAX_OTHER);
  return Array.from({length: numberOfPhotos}, choosePhoto);
}


function generateAd () {
  const location = {
    lat: getRandomPositiveNumber(LOCATION.lat.from, LOCATION.lat.to, 5),
    lng: getRandomPositiveNumber(LOCATION.lng.from, LOCATION.lng.to, 5),
  };

  return {
    author: {
      avatar : generateAvatar(),
    },
    offer : {
      title: TITLE,
      // eslint-disable-next-line prefer-template
      address: location.lat + ', ' + location.lng,
      price: getRandomPositiveNumber(0,RANDOM_MAX_PRICE),
      type: TYPE[getRandomPositiveNumber(0,TYPE.length - 1)],
      rooms: getRandomPositiveNumber(0,RANDOM_MAX_OTHER),
      guests: getRandomPositiveNumber(0,RANDOM_MAX_OTHER),
      checkin: CHECKIN[getRandomPositiveNumber(0,CHECKIN.length - 1)],
      checkout: CHECKOUT[getRandomPositiveNumber(0,CHECKOUT.length - 1)],
      features: generateFeatures(),
      description: DESCRIPTION,
      photos: generatePhotos(),
    },
    location: {
      lat: location.lat,
      lng: location.lng,
    },
  };

}

const relatedAds = Array.from({length: NUMBER_OF_RELATED_ADS}, generateAd);

// eslint-disable-next-line no-console
console.log(relatedAds);
