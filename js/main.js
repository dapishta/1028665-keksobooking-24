import { activateForm, deactivateForm, setAdFormSubmit, resetForm } from './form.js';
import { activateFilter, deactivateFilter } from './filter.js';
import { activateMap, addRelatedMarkers, resetMap } from './map.js';
import { getData } from './api.js';
import { showAlert, showSuccessMessage, showErrorMessage } from './util.js';


function setUpPage () {
  deactivateForm();
  deactivateFilter();
  activateMap();
}

setUpPage();

function activatePage () {
  activateForm();
  setAdFormSubmit(() => {
    showSuccessMessage();
    resetForm();
    resetMap();
  }, showErrorMessage);
  activateFilter();
  getData(addRelatedMarkers, (err) => {
    showAlert(err);
    deactivateFilter();
  });
}


export {activatePage};


