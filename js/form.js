import {addClassName, disableField, enableField, removeClassName} from './util.js';
import {filter, filterFieldsets} from './filter.js';

const form = document.querySelector('.ad-form');
const fieldsets = form.querySelectorAll('fieldset');
const capacityField = form.querySelector('#capacity');
const capacityOptions = capacityField.querySelectorAll('option');

// Валидация формы

function setAvailableCapacity () {
  const roomsNumber = Number(form.querySelector('#room_number').value);
  const oneGuest = capacityOptions[2];
  const twoGuests = capacityOptions[1];
  const threeGuests = capacityOptions[0];
  const zeroGuests = capacityOptions[3];
  const selectedGuestNumber = Number(capacityField.value);

  capacityOptions.forEach( (element) => {
    element.disabled = true;
  });

  if (roomsNumber === 1) {
    oneGuest.disabled = false;
    oneGuest.selected = true;
  } else if (roomsNumber === 2) {
    oneGuest.disabled = false;
    twoGuests.disabled = false;

    if (selectedGuestNumber === 3 || selectedGuestNumber === 0) {
      twoGuests.selected = true;
    }

  } else if (roomsNumber === 3) {
    oneGuest.disabled = false;
    twoGuests.disabled = false;
    threeGuests.disabled = false;

    if (selectedGuestNumber === 0) {
      threeGuests.selected = true;
    }

  } else {
    zeroGuests.disabled = false;
    zeroGuests.selected = true;
  }
}


function onAdFormChange (evt) {
  if (evt.target.matches('#room_number')) {
    setAvailableCapacity();
  }
  if (evt.target.matches('#capacity')) {
    setAvailableCapacity();
  }
}


// Активация и деактивация формы

function deactivateForms () {
  form.removeEventListener('change', onAdFormChange);
  addClassName(form, 'ad-form--disabled');
  addClassName(filter, 'map__filters--disabled');
  fieldsets.forEach( (element) => {
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
  fieldsets.forEach( (element) => {
    enableField(element);
  } );
  filterFieldsets.forEach( (element) => {
    enableField(element);
  } );
}

export {deactivateForms, activateForms};


