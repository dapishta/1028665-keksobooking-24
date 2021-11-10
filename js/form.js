import { sendData } from './api.js';
import { TYPE_MIN_PRICES, TokyoCenterLocation } from './data.js';
import { resetMap } from './map.js';
import { showSuccessMessage, showErrorMessage } from './util.js';

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
const typeField = form.querySelector('#type');
const resetLink = form.querySelector('.ad-form__reset');


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

function setAddressField (latLngString) {
  addressField.value = latLngString;
  addressField.defaultValue = latLngString;
  // addressField.value = `${object.lat}, ${object.lng}`;
  // addressField.defaultValue = `${object.lat}, ${object.lng}`;
}


// Resetting the form

function resetForm () {
  form.reset();
  setMinPrice(typeField.value);
  setAddressField(`${TokyoCenterLocation.LAT}, ${TokyoCenterLocation.LNG}`);
}

function onResetLinkClick () {
  resetForm();
  resetMap();
}


// Form submit

function onAdFormSubmit (evt) {

  evt.preventDefault();
  const formData = new FormData(evt.target);
  sendData(() => {
    showSuccessMessage();
    resetForm();
    resetMap();
  },
  showErrorMessage,
  formData);

}


// Form activation

function deactivateForm () {
  form.classList.add('ad-form--disabled');
  formFieldsets.forEach( (element) => {
    element.disabled = true;
  } );

}

function activateForm () {
  form.addEventListener('change', onAdFormChange);
  form.addEventListener('submit', onAdFormSubmit);
  resetLink.addEventListener('click', onResetLinkClick);
  setAvailableCapacity();
  setMinPrice('flat');
  addressField.value = `${TokyoCenterLocation.LAT}, ${TokyoCenterLocation.LNG}`;
  form.classList.remove('ad-form--disabled');
  formFieldsets.forEach( (element) => {
    element.disabled = false;
  } );
}


export { deactivateForm, activateForm, setAddressField, resetForm };
