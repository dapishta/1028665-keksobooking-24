const filter = document.querySelector('.map__filters');
const filterFieldsets = filter.querySelectorAll('fieldset');

function deactivateFilter () {
  filter.classList.add('map__filters--disabled');
  filterFieldsets.forEach( (element) => {
    element.disabled = true;
  } );
}

function activateFilter () {
  filter.classList.remove('map__filters--disabled');
  filterFieldsets.forEach( (element) => {
    element.disabled = false;
  } );
}

export {deactivateFilter, activateFilter};
