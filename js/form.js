const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const capacityField = form.querySelector('#capacity');
const capacityOptions = capacityField.querySelectorAll('option');


function setAvailableCapacity () {
  const roomsNumber = Number(form.querySelector('#room_number').value);
  const selectedGuestNumber = Number(capacityField.value);

  capacityOptions.forEach( (element) => {
    element.disabled = true;
    const optionValue = Number(element.value);

    switch (roomsNumber) {
      case 1:
        if (optionValue === 1) {
          element.disabled = false;
          element.selected = true;
        }
        break;
      case 2:
        if (optionValue === 1 || optionValue === 2) {
          element.disabled = false;
          if (selectedGuestNumber === 3 || selectedGuestNumber === 0) {
            if (optionValue === 2) {
              element.selected = true;
            }
          }
        }
        break;
      case 3:
        if (optionValue === 1 || optionValue === 2 || optionValue === 3) {
          element.disabled = false;
        }
        if (selectedGuestNumber === 0) {
          if (optionValue === 3) {
            element.selected = true;
          }
        }
        break;
      default:
        if (optionValue === 0) {
          element.disabled = false;
          element.selected = true;
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


export {form, formFieldsets, setAvailableCapacity, onAdFormChange};


