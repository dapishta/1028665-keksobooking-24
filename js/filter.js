import { addRelatedMarkers } from './map.js';
// import { debounce } from './utils/debounce.js';


const filter = document.querySelector('.map__filters');
const filterFieldsets = filter.querySelectorAll('fieldset');
const RELATED_OFFERS_NUMBER = 10;
const housingFeaturesFieldset = filter.querySelector('#housing-features');
const housingFeaturesCollection = housingFeaturesFieldset.querySelectorAll('input');
let allOffers;


function checkType (offerType) {
  const typeFieldValue = filter.querySelector('#housing-type').value;

  if (typeFieldValue === offerType || typeFieldValue === 'any') {
    return true;
  }
  return false;
}

function checkPrice (offerPrice) {
  const priceFieldValue = filter.querySelector('#housing-price').value;
  if (priceFieldValue === 'any') {
    return true;
  } else if (priceFieldValue === 'low' && offerPrice < 10000) {
    return true;
  } else if (priceFieldValue === 'middle' && offerPrice >= 10000 && offerPrice <= 50000){
    return true;
  } else if (priceFieldValue === 'high' && offerPrice > 50000) {
    return true;
  }

  return false;
}

function checkRooms (offerRooms) {
  const roomsFieldValue = filter.querySelector('#housing-rooms').value;
  if (roomsFieldValue === offerRooms.toString() || roomsFieldValue === 'any') {
    return true;
  }
  return false;
}

function checkGuests (offerGuests) {
  const guestsFieldValue = filter.querySelector('#housing-guests').value;
  if (guestsFieldValue === offerGuests.toString() || guestsFieldValue === 'any') {
    return true;
  }
  return false;
}

function checkFeatures (offerFeatures) {
  const chosenFeatures = housingFeaturesFieldset.querySelectorAll('input:checked');

  if (chosenFeatures.length === 0) {
    return true;
  }

  if (!offerFeatures) {
    return false;
  }

  let result = 0;

  chosenFeatures.forEach((chosenFeature)=>{
    offerFeatures.forEach((offerFeature) => {
      if (chosenFeature.value === offerFeature) {
        result++;
      }
    });
  });

  if (result === chosenFeatures.length) {
    return true;
  }
}


function filterOffers (offers) {
  allOffers = offers;
  const filteredOffers = [];

  offers.forEach( (element) => {
    const isTypeValid = checkType(element.offer.type);
    const isPriceValid = checkPrice(element.offer.price);
    const isRoomsValid = checkRooms(element.offer.rooms);
    const isGuestsValid = checkGuests(element.offer.guests);
    const isFeaturesValid = checkFeatures(element.offer.features);

    if (isTypeValid && isPriceValid && isRoomsValid && isGuestsValid && isFeaturesValid ) {
      filteredOffers.push(element);
    }

  });

  addRelatedMarkers(filteredOffers.slice(0,RELATED_OFFERS_NUMBER ));
}

function onFilterChange (evt) {
  if (evt.target.matches('#housing-type') || evt.target.matches('#housing-price') || evt.target.matches('#housing-rooms') || evt.target.matches('#housing-guests')) {
    // debounce(()=>filterOffers(allOffers),500);
    filterOffers(allOffers);
  }

  housingFeaturesCollection.forEach ((element)=>{
    if (evt.target.matches(`#${element.id}`)) {
      filterOffers(allOffers);
      // debounce(() => {filterOffers(allOffers)}, 5000);
    }
  });
}

// Activate & deactivate filter

function deactivateFilter () {
  filter.classList.add('map__filters--disabled');
  filterFieldsets.forEach( (element) => {
    element.disabled = true;
  } );
}

function activateFilter () {
  filter.classList.remove('map__filters--disabled');
  filterFieldsets.forEach( (element) => {
    element.disabled = false;
  } );
  filter.addEventListener('change', onFilterChange);
}

export { deactivateFilter, activateFilter, filterOffers };
