import { addRelatedMarkers } from './map.js';
import { debounce } from './utils/debounce.js';


const filter = document.querySelector('.map__filters');
const filterFieldsets = filter.querySelectorAll('fieldset');
const RELATED_OFFERS_NUMBER = 10;
const housingFeaturesFieldset = filter.querySelector('#housing-features');
const typeField = filter.querySelector('#housing-type');
const priceField = filter.querySelector('#housing-price');
const roomsField = filter.querySelector('#housing-rooms');
const guestsField= filter.querySelector('#housing-guests');
let allOffers;


function checkType (offerType) {
  return typeField.value === 'any' ? true : typeField.value === offerType;
}

function checkPrice (offerPrice) {
  switch (priceField.value) {
    case 'any': return true;
    case 'low': return offerPrice < 10000;
    case 'middle': return offerPrice >= 10000 && offerPrice <= 50000;
    case 'high': return offerPrice > 50000;
    default: return false;
  }
}

function checkRooms (offerRooms) {
  return roomsField.value === 'any' ? true : roomsField.value === offerRooms.toString();
}

function checkGuests (offerGuests) {
  return guestsField.value === 'any' ? true : guestsField.value === offerGuests.toString();
}

function checkFeatures (offerFeatures=[], chosenFeatures) {
  return Array.from(chosenFeatures).every((element) => offerFeatures.includes(element.value));
}

function filterOffers (offers) {
  const filteredOffers = [];
  const chosenFeatures = housingFeaturesFieldset.querySelectorAll('input:checked');

  for (let counter = 0; counter < offers.length && filteredOffers.length < RELATED_OFFERS_NUMBER ; counter++) {
    const isTypeValid = checkType(offers[counter].offer.type);
    const isPriceValid = checkPrice(offers[counter].offer.price);
    const isRoomsValid = checkRooms(offers[counter].offer.rooms);
    const isGuestsValid = checkGuests(offers[counter].offer.guests);
    const isFeaturesValid = checkFeatures(offers[counter].offer.features, chosenFeatures);

    if (isTypeValid && isPriceValid && isRoomsValid && isGuestsValid && isFeaturesValid ) {
      filteredOffers.push(offers[counter]);
    }
  }

  addRelatedMarkers(filteredOffers);
}

const filterOffersDebounce = debounce(filterOffers);

function onFilterChange () {
  filterOffersDebounce(allOffers);
}

// Activate & deactivate filter

function deactivateFilter () {
  filter.classList.add('map__filters--disabled');
  filterFieldsets.forEach( (element) => {
    element.disabled = true;
  } );
}

function activateFilter (offers) {
  allOffers = offers;
  filterOffers(allOffers);
  filter.classList.remove('map__filters--disabled');
  filterFieldsets.forEach( (element) => {
    element.disabled = false;
  } );
  filter.addEventListener('change', onFilterChange);
}

export { deactivateFilter, activateFilter, filterOffers };
