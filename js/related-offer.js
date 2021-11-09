const cardTemplate = document.querySelector('#card').content.querySelector('.popup');


function getRoomWord (number) {
  const lastNumber = number % 10;

  if (lastNumber === 1) {
    return 'комната';
  }

  if (lastNumber > 1 && lastNumber <= 4) {
    return 'комнаты';
  }

  return 'комнат';
}

function getGuestWord (number) {
  return (number > 1) ? 'гостeй' : 'гостя';
}

function getOfferPhotosFragment (urls, template) {
  const imagesFragment = document.createDocumentFragment();

  urls.forEach((element) => {
    const newImg = template.cloneNode(true);
    newImg.src = element;
    imagesFragment.appendChild(newImg);
  });

  return imagesFragment;
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
  const offerPhotoTemplate = offerPhotos.querySelector('img.popup__photo');
  const offerAuthorAvatar = newRelatedOffer.querySelector('.popup__avatar');
  const roomsNumber = item.offer.rooms;
  const roomsWord = getRoomWord(roomsNumber);
  const guestsNumber = item.offer.guests;
  const guestsWord = getGuestWord(guestsNumber);

  if (item.offer.photos) {
    const imagesToInsert = getOfferPhotosFragment(item.offer.photos, offerPhotoTemplate);
    offerPhotos.replaceChild(imagesToInsert, offerPhotoTemplate);
  }

  offerTitle.textContent = item.offer.title;
  offerAddress.textContent = item.offer.address;
  offerPrice.textContent = `${  item.offer.price  } ₽/ночь`;
  offerType.textContent = item.offer.type;
  offerCapacity.textContent = `${  roomsNumber  } ${  roomsWord  } для ${  guestsNumber  } ${  guestsWord  }`;
  offerCheckInOut.textContent = `${  item.offer.checkin  }, выезд до ${  item.offer.checkout  }`;
  item.offer.features ? offerFeatures.textContent = item.offer.features : offerFeatures.classList.add('hidden');
  item.offer.description ? offerDescription.textContent = item.offer.description : offerDescription.classList.add('hidden');

  offerAuthorAvatar.src = item.author.avatar;
  return newRelatedOffer;
}


export { getRelatedOffer };

