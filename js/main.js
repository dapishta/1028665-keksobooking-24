function getRandomNumber (min, max, numberOfSymbolsAfterComma) {

  if (min < 0) {
    // eslint-disable-next-line no-alert
    alert('Please choose a range where min is equal or higher than 0');
    return NaN;
  } else if (max < min) {
    const swap = min;
    min = max;
    max = swap;
  } else if (numberOfSymbolsAfterComma < 0) {
    // eslint-disable-next-line no-alert
    alert('Please choose the number of symbols after comma greater than zero');
    return NaN;
  }

  const randomNumber = Math.random() * (max - min) + min;

  return (randomNumber).toFixed(numberOfSymbolsAfterComma);

}

getRandomNumber(1,1000,5);
getRandomNumber(1,100);
