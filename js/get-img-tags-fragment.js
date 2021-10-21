function getImgTagsFragment (array) {
  const imagesFragment = document.createDocumentFragment();

  array.forEach((element) => {
    const newImg = document.createElement('img');
    newImg.src = element;
    imagesFragment.appendChild(newImg);
  });

  return imagesFragment;
}

export {getImgTagsFragment};
