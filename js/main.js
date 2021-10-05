// Fake data

const TITLE = 'Лучшее место для отдыха';
const DESCRIPTION = 'Заполните все обязательные поля, назначьте цену, загрузите аватар и фото жилья. Придумайте интересное описание. Оно сделает объявление более живым и привлекательным. Получившееся объявление должно давать гостям полное представление о вашем жилье.';

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

const types = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const checkins = [
  '12:00',
  '13:00',
  '14:00',
];

const checkouts = [
  '12:00',
  '13:00',
  '14:00',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const photos = [
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

function shuffleArray(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
}


function getAvatar () {
  let avatar;
  const avatarRandomNumber = getRandomPositiveNumber(MIN_AVATAR,MAX_AVATAR);

  (avatarRandomNumber<10)
    ? avatar = `img/avatars/user0${  avatarRandomNumber  }.png`
    : avatar = `img/avatars/user${  avatarRandomNumber  }.png`;

  return avatar;
}


function getFeatures () {
  const featuresNumber = getRandomPositiveNumber(0,features.length-1);
  const featuresForShuffle = features.slice();
  const shuffledFeatures = shuffleArray(featuresForShuffle);
  return shuffledFeatures.slice(0,featuresNumber);
}


function getPhotos () {

  function choosePhoto () {
    return photos[getRandomPositiveNumber(0,photos.length-1)];
  }

  const numberOfPhotos = getRandomPositiveNumber(0,MAX_OTHER);
  return Array.from({length: numberOfPhotos}, choosePhoto);
}


function getAd () {
  const location = {
    lat: getRandomPositiveNumber(LOCATION.lat.from, LOCATION.lat.to, 5),
    lng: getRandomPositiveNumber(LOCATION.lng.from, LOCATION.lng.to, 5),
  };

  return {
    author: {
      avatar : getAvatar(),
    },
    offer : {
      title: TITLE,
      address: `${location.lat  }, ${  location.lng}`,
      price: getRandomPositiveNumber(0,MAX_PRICE),
      type: types[getRandomPositiveNumber(0,types.length - 1)],
      rooms: getRandomPositiveNumber(0,MAX_OTHER),
      guests: getRandomPositiveNumber(0,MAX_OTHER),
      checkin: checkouts[getRandomPositiveNumber(0,checkins.length - 1)],
      checkout: checkouts[getRandomPositiveNumber(0,checkouts.length - 1)],
      features: getFeatures(),
      description: DESCRIPTION,
      photos: getPhotos(),
    },
    location: {
      lat: location.lat,
      lng: location.lng,
    },
  };

}

const relatedAds = Array.from({length: NUMBER_OF_RELATED_ADS}, getAd);

// eslint-disable-next-line no-console
console.log(relatedAds);
