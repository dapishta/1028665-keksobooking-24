import {addClassName, disableField, enableField, removeClassName} from './util.js';

const adForm = document.querySelector('.ad-form');
const adFormFileldsets = adForm.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters');
const mapFiltersFileldsets = mapFilters.querySelectorAll('fieldset');


function deactivateForms () {
  addClassName(adForm, 'ad-form--disabled');
  addClassName(mapFilters, 'ad-form--disabled');
  adFormFileldsets.forEach( (element) => {
    disableField(element);
  } );
  mapFiltersFileldsets.forEach( (element) => {
    disableField(element);
  } );
}

function activateForms () {
  removeClassName(adForm, 'ad-form--disabled');
  removeClassName(mapFilters, 'ad-form--disabled');
  adFormFileldsets.forEach( (element) => {
    enableField(element);
  } );
  mapFiltersFileldsets.forEach( (element) => {
    enableField(element);
  } );
}

export {deactivateForms, activateForms};


