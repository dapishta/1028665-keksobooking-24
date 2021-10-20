import {getRelatedData} from './get-related-data.js';
import {getImgTags} from './get-img-tags.js';
import {insertFragment} from './insert-fragment.js';


const cardTemplate = document.querySelector('#card').content;
const map = document.querySelector('#map-canvas');
const relatedOffers = getRelatedData();

function getRoomsName (number) {
  if (number === 1) {
    return 'комната';
  } else if (number <= 4) {
    return 'комнаты';
  }
  return 'комнат';
}

function getRelatedOffer () {
  const item = relatedOffers[0];
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
  offerType.textContent = Object.values(item.offer.type);
  offerCapacity.textContent = `${  item.offer.rooms  } ${  getRoomsName(item.offer.rooms)  } для ${  item.offer.guests  } ${  item.offer.guests === 1 ? 'гостя' : 'гостей'  }`;
  offerCheckInOut.textContent = `${  item.offer.checkin  }, выезд до ${  item.offer.checkout  }`;
  offerFeatures.textContent = item.offer.features;
  item.offer.description ? offerDescription.classList.add('hidden') : offerDescription.textContent = item.offer.description;

  offerPhotos.appendChild(getImgTags(item.offer.photos));
  offerAuthorAvatar.src = item.author.avatar;
  return newRelatedOffer;
}

function showRelatedOffer () {
  const relatedOffer = getRelatedOffer();
  insertFragment(map, relatedOffer);
}

export {showRelatedOffer};

