function getData (onSuccess, onFail) {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(() => {
      onFail('Не удалось загрузить похожие объявления. Обновите страницу');
    });
}

const sendData = function (onSuccess, onFail, body) {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error;
      }
    })
    .catch(() => {
      onFail();
    });

};


export {getData, sendData};
