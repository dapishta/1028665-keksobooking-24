import {showRelatedOffer} from './show-related-offer.js';
import {deactivateForm, activateForm} from './form.js';
import {deactivateFilter, activateFilter} from './filter.js';


function setUpPage () {
  showRelatedOffer();
  deactivateForm();
  activateForm();
  deactivateFilter();
  activateFilter();
}

setUpPage();


