function getRandomPositiveNumber (min, max, numberOfSymbolsAfterComma) {

  if (min < 0) {
    throw new RangeError(`Параметр ${  min  }  должен быть больше 0 `);
  }

  const maxNumber = Math.max(min,max);
  const minNumber = Math.min(min,max);

  const randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;

  return (randomNumber).toFixed(numberOfSymbolsAfterComma);

}

getRandomPositiveNumber(100,1,2);
