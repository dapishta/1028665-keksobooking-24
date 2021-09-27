function getRandomNumber (min, max) {
  if (max < min) {
      return 'Please choose a range where min is less than max';
  } else if (min < 0) {
      return 'Please choose a range where min is equal or higher than 0';
  } else if ( max === min) {
      return 'Please choose not equal min and max numbers';
  }
 return Math.random() * (max - min) + min;
}


function getRandomIntegralNumber (min, max) {

  let randomNumber = getRandomNumber(min,max); 

  if (typeof randomNumber  === 'number') {
    return Math.floor(randomNumber);
  }

  return randomNumber;

};


function getRandomFractionalNumber (min, max, numberOfSymbolsAfterComma) {

  if (numberOfSymbolsAfterComma < 0){
    return 'Please choose number of Symbols after comma higher than 0';
  }

 let randomNumber = getRandomNumber(min,max); 

  if (typeof randomNumber  === 'number') {
    return (randomNumber).toFixed(numberOfSymbolsAfterComma);
  }

  return randomNumber;

}

getRandomFractionalNumber(0.1,1.2,3); 
getRandomIntegralNumber(0,100); 



// Источники:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed