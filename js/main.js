import { activateForm, deactivateForm } from './form.js';
import { activateFilter, deactivateFilter } from './filter.js';
import { activateMap, addRelatedMarkers } from './map.js';
import { getData } from './api.js';
import { showAlert } from './util.js';


function setUpPage () {
  deactivateForm();
  deactivateFilter();
  activateMap();
}

setUpPage();

function activatePage () {
  activateForm();
  activateFilter();
  getData(addRelatedMarkers, (err) => {
    showAlert(err);
    deactivateFilter();
  });
}


export {activatePage};


