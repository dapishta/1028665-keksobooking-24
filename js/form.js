import { TYPE_MIN_PRICES } from './data.js';

const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const capacityField = form.querySelector('#capacity');
const capacityOptions = capacityField.querySelectorAll('option');
const timeInField = form.querySelector('#timein');
const timeInOptions = timeInField.querySelectorAll('option');
const timeOutField = form.querySelector('#timeout');
const timeOutOptions = timeOutField.querySelectorAll('option');
const priceField = form.querySelector('#price');
const addressField = form.querySelector('#address');


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


function setTimeInOut (value, options) {
  options.forEach ( (option) => {
    if (option.value === value) {
      option.selected = true;
    }
  });
}

function setMinPrice (value) {
  priceField.min = TYPE_MIN_PRICES[value];
  priceField.placeholder = TYPE_MIN_PRICES[value];
}

function onAdFormChange (evt) {
  if (evt.target.matches('#room_number')) {
    setAvailableCapacity();
  }
  if (evt.target.matches('#capacity')) {
    setAvailableCapacity();
  }
  if (evt.target.matches('#timein')) {
    setTimeInOut(evt.target.value, timeOutOptions);
  }
  if (evt.target.matches('#timeout')) {
    setTimeInOut(evt.target.value, timeInOptions);
  }
  if (evt.target.matches('#type')) {
    setMinPrice(evt.target.value);
  }

}

// Form activation

function deactivateForm () {
  form.removeEventListener('change', onAdFormChange);
  form.classList.add('ad-form--disabled');
  formFieldsets.forEach( (element) => {
    element.disabled = true;
  } );
}

function activateForm () {
  form.addEventListener('change', onAdFormChange);
  setAvailableCapacity();
  setMinPrice('flat');
  form.classList.remove('ad-form--disabled');
  formFieldsets.forEach( (element) => {
    element.disabled = false;
  } );
}


export { deactivateForm, activateForm, addressField };
