function getImgTags (array) {
  const imagesFragment = document.createDocumentFragment();

  for (let counter = 0; counter < array.length; counter++) {
    const newImg = document.createElement('img');
    newImg.src = array[counter];
    imagesFragment.appendChild(newImg);
  }
  return imagesFragment;
}

export {getImgTags};
