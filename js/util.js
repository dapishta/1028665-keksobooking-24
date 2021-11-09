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
  const successTemplate = document.querySelector('#success').content;
  body.appendChild(successTemplate);

  const successPopup = document.querySelector('.success');

  function onEscPressed (evt) {
    if (evt.key === 'Escape') {
      body.removeChild(successPopup);
      document.removeEventListener('keydown', onEscPressed);
    }
  }

  successPopup.addEventListener('click', () => {
    body.removeChild(successPopup);
    document.removeEventListener('keydown', onEscPressed);
  });

  document.addEventListener('keydown', onEscPressed);

}

function showErrorMessage () {
  const errorTemplate = document.querySelector('#error').content;
  body.appendChild(errorTemplate);

  const errorPopup = document.querySelector('.error');

  function onClick () {
    body.removeChild(errorPopup);
    document.removeEventListener('keydown', onEscPressed);
    document.removeEventListener('click', onClick);
  }

  function onEscPressed (evt) {
    if (evt.key === 'Escape') {
      body.removeChild(errorPopup);
      document.removeEventListener('keydown', onEscPressed);
      document.removeEventListener('click', onClick);
    }
  }

  document.addEventListener('click', onClick);
  document.addEventListener('keydown', onEscPressed);

}


export { showAlert, showSuccessMessage, showErrorMessage };
