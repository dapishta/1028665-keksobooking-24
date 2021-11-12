import { activateForm, deactivateForm } from './form.js';
import { deactivateFilter, activateFilter } from './filter.js';
import { activateMap } from './map.js';
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
  getData(activateFilter, (err) => {
    showAlert(err);
  });
}


export {activatePage};


