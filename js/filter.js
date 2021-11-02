import {disableField, enableField} from './util.js';

const filter = document.querySelector('.map__filters');
const filterFieldsets = filter.querySelectorAll('fieldset');

function deactivateFilter () {
  filter.classList.add('map__filters--disabled');
  filterFieldsets.forEach( (element) => {
    disableField(element);
  } );
}

function activateFilter () {
  filter.classList.remove('map__filters--disabled');
  filterFieldsets.forEach( (element) => {
    enableField(element);
  } );
}

export {deactivateFilter, activateFilter};
