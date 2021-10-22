function getImgTagsFragment (urls) {
  const imagesFragment = document.createDocumentFragment();

  urls.forEach((element) => {
    const newImg = document.createElement('img');
    newImg.src = element;
    imagesFragment.appendChild(newImg);
  });

  return imagesFragment;
}

export {getImgTagsFragment};
