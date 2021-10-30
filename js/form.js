import {addClassName, disableField, enableField, removeClassName} from './util.js';

const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const capacityField = form.querySelector('#capacity');
const capacityOptions = capacityField.querySelectorAll('option');


// Form validation

function setAvailableCapacity () {
  const roomsNumber = Number(form.querySelector('#room_number').value);
  const selectedGuestNumber = Number(capacityField.value);

  capacityOptions.forEach( (option) => {
    const optionValue = Number(option.value);

    if (roomsNumber < optionValue || optionValue === 0){
      option.disabled = true;
    } else {
      option.disabled = false;
      if (selectedGuestNumber === 0 && optionValue === roomsNumber) {
        option.selected = true;
      } else if (selectedGuestNumber > optionValue && optionValue === roomsNumber) {
        option.selected = true;
      }
    }

    if (roomsNumber >= 100) {
      if (optionValue === 0) {
        option.disabled = false;
        option.selected = true;
      } else {
        option.disabled = true;
      }
    }
  });
}


function onAdFormChange (evt) {
  if (evt.target.matches('#room_number')) {
    setAvailableCapacity();
  }
  if (evt.target.matches('#capacity')) {
    setAvailableCapacity();
  }
}

// Form activation

function deactivateForm () {
  form.removeEventListener('change', onAdFormChange);
  addClassName(form, 'ad-form--disabled');
  formFieldsets.forEach( (element) => {
    disableField(element);
  } );
}

function activateForm () {
  form.addEventListener('change', onAdFormChange);
  setAvailableCapacity();
  removeClassName(form, 'ad-form--disabled');
  formFieldsets.forEach( (element) => {
    enableField(element);
  } );
}


export {deactivateForm, activateForm};
