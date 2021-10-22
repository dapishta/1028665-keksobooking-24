import {getRelatedData} from './get-related-data.js';
import {getImgTagsFragment} from './get-img-tags-fragment.js';
import {insertFragment} from './insert-fragment.js';


const cardTemplate = document.querySelector('#card').content;
const map = document.querySelector('#map-canvas');
const relatedOffers = getRelatedData();

function getRoomsEnding (number) {

  const numbers = Array.from(String(number), Number);
  const lastNumber = numbers[numbers.length-1];

  if (lastNumber === 1) {
    return 'комната';
  } else if (lastNumber > 1 && lastNumber <= 4) {
    return 'комнаты';
  }

  return 'комнат';
}

function getGuestEnding (number) {
  return (number > 1) ? 'гостeй' : 'гостя';
}


function getRelatedOffer (item) {
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
  const roomsNumber = item.offer.rooms;
  const roomsNumberEnding = getRoomsEnding(roomsNumber);
  const guestsNumber = item.offer.guests;
  const guestNumberEnding = getGuestEnding(guestsNumber);

  offerTitle.textContent = item.offer.title;
  offerAddress.textContent = item.offer.address;
  offerPrice.textContent = `${  item.offer.price  } ₽/ночь`;
  offerType.textContent = Object.values(item.offer.type);
  offerCapacity.textContent = `${  roomsNumber  } ${  roomsNumberEnding  } для ${  guestsNumber  } ${  guestNumberEnding  }`;
  offerCheckInOut.textContent = `${  item.offer.checkin  }, выезд до ${  item.offer.checkout  }`;
  offerFeatures.textContent = item.offer.features;
  item.offer.description ? offerDescription.classList.add('hidden') : offerDescription.textContent = item.offer.description;

  offerPhotos.appendChild(getImgTagsFragment(item.offer.photos));
  offerAuthorAvatar.src = item.author.avatar;
  return newRelatedOffer;
}

function showRelatedOffer () {
  const relatedOffer = getRelatedOffer(relatedOffers[0]);
  insertFragment(map, relatedOffer);
}

export {showRelatedOffer};

