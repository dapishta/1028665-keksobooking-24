const body = document.querySelector('body');
const ALERT_SHOW_TIME = 5000;

function showAlert (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '16px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.style.color = 'white';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

function showSuccessMessage () {
  const successTemplate = document.querySelector('#success').content.cloneNode(true);
  body.appendChild(successTemplate);

  const successPopup = document.querySelector('.success');

  function onSuccessEscPressed (evt) {
    if (evt.key === 'Escape') {
      body.removeChild(successPopup);
      document.removeEventListener('keydown', onSuccessEscPressed);
    }
  }

  successPopup.addEventListener('click', () => {
    body.removeChild(successPopup);
    document.removeEventListener('keydown', onSuccessEscPressed);
  });

  document.addEventListener('keydown', onSuccessEscPressed);
}

function showErrorMessage () {
  const errorTemplate = document.querySelector('#error').content.cloneNode(true);
  body.appendChild(errorTemplate);

  const errorPopup = document.querySelector('.error');

  function onErrorEscPressed (evt) {
    if (evt.key === 'Escape') {
      body.removeChild(errorPopup);
      document.removeEventListener('keydown', onErrorEscPressed);
    }
  }

  errorPopup.addEventListener('click', () => {
    body.removeChild(errorPopup);
    document.removeEventListener('keydown', onErrorEscPressed);
  });

  document.addEventListener('keydown', onErrorEscPressed);
}


export { showAlert, showSuccessMessage, showErrorMessage };
