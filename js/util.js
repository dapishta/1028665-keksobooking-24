function getRandomPositiveNumber (min, max, numberOfSymbolsAfterComma) {
  if (min < 0) {
    throw new RangeError(`Параметр ${  min  }  должен быть больше 0 `);
  }

  const maxNumber = Math.max(min, max);
  const minNumber = Math.min(min, max);

  const randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;

  return (randomNumber).toFixed(numberOfSymbolsAfterComma);
}

function shuffleArray(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
}

function addClassName (element, className) {
  element.classList.add(className);
}

function removeClassName (element, className) {
  element.classList.remove(className);
}

function disableField (field) {
  field.disabled = true;
}

function enableField (field) {
  field.disabled = false;
}

function insertFragment (placeToInsert, fragment) {
  placeToInsert.appendChild(fragment);
}

function getImgTagsFragment (urls) {
  const imagesFragment = document.createDocumentFragment();

  urls.forEach((element) => {
    const newImg = document.createElement('img');
    newImg.src = element;
    imagesFragment.appendChild(newImg);
  });

  return imagesFragment;
}


export {insertFragment,getRandomPositiveNumber, shuffleArray, addClassName, disableField, enableField, removeClassName, getImgTagsFragment};
