import {addClassName, disableField, enableField, removeClassName} from './util.js';

const filter = document.querySelector('.map__filters');
const filterFieldsets = filter.querySelectorAll('fieldset');

function deactivateFilter () {
  addClassName(filter, 'map__filters--disabled');
  filterFieldsets.forEach( (element) => {
    disableField(element);
  } );
}

function activateFilter () {
  removeClassName(filter, 'map__filters--disabled');
  filterFieldsets.forEach( (element) => {
    enableField(element);
  } );
}

export {deactivateFilter, activateFilter};
