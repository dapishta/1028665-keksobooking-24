import { activateForm, deactivateForm } from './form.js';
import { activateFilter, deactivateFilter } from './filter.js';
import { activateMap, addRelatedMarkers } from './map.js';
import { relatedOffers } from './related-offer.js';


function setUpPage () {
  deactivateForm();
  deactivateFilter();
  activateMap();
}

function activatePage () {
  activateForm();
  activateFilter();
  addRelatedMarkers(relatedOffers);
}

setUpPage();

export {activatePage};


