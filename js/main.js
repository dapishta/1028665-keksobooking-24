import { deactivateForm } from './form.js';
import { deactivateFilter } from './filter.js';
import { activateMap } from './map.js';


function setUpPage () {
  deactivateForm();
  deactivateFilter();
  activateMap();
}


setUpPage();


