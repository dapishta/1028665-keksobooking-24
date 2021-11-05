import { TITLE, DESCRIPTION, MAX_PRICE, MIN_AVATAR, MAX_AVATAR, MAX_OTHER, NUMBER_OF_RELATED_ADS, LOCATION, TYPES, CHECKINS, CHECKOUTS, FEATURES, PHOTOS } from './data.js';
import { getRandomPositiveNumber, shuffleArray } from './util.js';

function getAvatar () {
  const avatarRandomNumber = getRandomPositiveNumber(MIN_AVATAR, MAX_AVATAR);
  const avatar = (avatarRandomNumber<10) ? `img/avatars/user0${  avatarRandomNumber  }.png` : `img/avatars/user${  avatarRandomNumber  }.png`;
  return avatar;
}

function getFeatures () {
  const featuresNumber = getRandomPositiveNumber(0, FEATURES.length-1);
  const featuresForShuffle = FEATURES.slice();
  const shuffledFeatures = shuffleArray(featuresForShuffle);
  return shuffledFeatures.slice(0, featuresNumber);
}

function getPhotos () {
  function choosePhoto () {
    return PHOTOS[getRandomPositiveNumber(0, PHOTOS.length-1)];
  }
  const numberOfPhotos = getRandomPositiveNumber(0, MAX_OTHER);
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
      price: getRandomPositiveNumber(0, MAX_PRICE),
      type: TYPES[getRandomPositiveNumber(0, TYPES.length - 1)],
      rooms: getRandomPositiveNumber(0, MAX_OTHER),
      guests: getRandomPositiveNumber(0, MAX_OTHER),
      checkin: CHECKINS[getRandomPositiveNumber(0, CHECKINS.length - 1)],
      checkout: CHECKOUTS[getRandomPositiveNumber(0, CHECKOUTS.length - 1)],
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

function getRelatedData () {
  return Array.from({length: NUMBER_OF_RELATED_ADS}, getAd);
}

export { getRelatedData };
