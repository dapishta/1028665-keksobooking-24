import {getRelatedOffers} from './get-related-data.js';


const cardTemplate = document.querySelector('#card').content;
const map = document.querySelector('#map-canvas');
const relatedOffers = getRelatedOffers();

const getTypeName = function (type) {
  const types = {
    'hotel': 'Отель',
    'flat': 'Квартира',
    'bungalow': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
  };
  return Object.getOwnPropertyDescriptor(types, type).value;
};

const getOfferPhotos = function (item) {
  const offerPhotos = document.createDocumentFragment();

  for (let counter = 0; counter < item.offer.photos.length; counter++) {
    const newImg = document.createElement('img');
    newImg.src = item.offer.photos[counter];
    offerPhotos.appendChild(newImg);
  }
  return offerPhotos;
};

const showRelatedOffers = function () {
  for (const item of relatedOffers) {
    const newRelatedOffer = cardTemplate.cloneNode(true);
    const offerTitle = newRelatedOffer.querySelector('.popup__title');
    const offerAddress = newRelatedOffer.querySelector('.popup__text--address');
    const offerPrice = newRelatedOffer.querySelector('.popup__text--price');
    const offerType = newRelatedOffer.querySelector('.popup__type');
    const offerCapacity = newRelatedOffer.querySelector('.popup__text--capacity');
    const offerCheckInOut = newRelatedOffer.querySelector('.popup__text--time');
    const offerFeatures = newRelatedOffer.querySelector('.popup__features');
    const offerDescription = newRelatedOffer.querySelector('.popup__description');
    const offerPhotos = newRelatedOffer.querySelector('.popup__photos');
    const offerAuthorAvatar = newRelatedOffer.querySelector('.popup__avatar');

    offerTitle.textContent = item.offer.title;
    offerAddress.textContent = item.offer.address;
    offerPrice.textContent = `${  item.offer.price  } ₽/ночь`;
    offerType.textContent = getTypeName(item.offer.type);
    offerCapacity.textContent = `${item.offer.rooms} комнаты для ${item.offer.guests} гостей`;
    offerCheckInOut.textContent = `${item.offer.checkin}, выезд до ${item.offer.checkout}`;
    offerFeatures.textContent = item.offer.features;

    (item.offer.description === '') ? offerDescription.classList.add('hidden') : offerDescription.textContent = item.offer.description;

    offerPhotos.appendChild(getOfferPhotos(item));
    offerAuthorAvatar.src = item.author.avatar;
    map.appendChild(newRelatedOffer);
  }
};

export {showRelatedOffers};

