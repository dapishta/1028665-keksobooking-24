import {addClassName, disableField, enableField, removeClassName} from './util.js';
import {form, formFieldsets, onAdFormChange, setAvailableCapacity} from './form.js';
import {filter, filterFieldsets} from './filter.js';

// Активация и деактивация формы

function deactivateForms () {
  form.removeEventListener('change', onAdFormChange);
  addClassName(form, 'ad-form--disabled');
  addClassName(filter, 'map__filters--disabled');
  formFieldsets.forEach( (element) => {
    disableField(element);
  } );
  filterFieldsets.forEach( (element) => {
    disableField(element);
  } );
}

function activateForms () {
  form.addEventListener('change', onAdFormChange);
  setAvailableCapacity();
  removeClassName(form, 'ad-form--disabled');
  removeClassName(filter, 'map__filters--disabled');
  formFieldsets.forEach( (element) => {
    enableField(element);
  } );
  filterFieldsets.forEach( (element) => {
    enableField(element);
  } );
}

export {deactivateForms, activateForms};
