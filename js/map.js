/* eslint-disable no-console */
import { activateForm } from './form.js';
import { activateFilter } from './filter.js';
import { addressField } from './form.js';
import { relatedOffers, getRelatedOffer } from './related-offer.js';


const map = L.map('map-canvas');


// Regular markers

const regularMarkerIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function addRegularMarker () {

  relatedOffers.forEach ( (element) => {
    const regularMarker = L.marker(
      {
        lat: element.location.lat,
        lng: element.location.lng,
      },
      {
        icon: regularMarkerIcon,
      },
    );

    regularMarker
      .addTo(map)
      .bindPopup(getRelatedOffer(element));

    regularMarker.on('click', () => {
      // Без строки ниже почему-то при втором открытии попап показывается пустой. Не понимаю, почему у меня сбрасывает контент после первого клика?
      regularMarker.setPopupContent(getRelatedOffer(element));
    });
  });

}


// Main marker

const mainMarkerIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

function addMainMarker () {
  const mainMarker = L.marker(
    {
      lat: 35.6762,
      lng: 139.6503,
    },
    {
      draggable: true,
      icon: mainMarkerIcon,
    },
  );

  mainMarker.addTo(map);
  mainMarker.on('moveend', (evt) => {
    const markerLat = evt.target.getLatLng().lat.toFixed(5);
    const markerLng = evt.target.getLatLng().lng.toFixed(5);
    addressField.value = `${markerLat}, ${markerLng}`;
  });
}


// Map

function activateMap () {
  map.on('load', () => {
    activateForm();
    activateFilter();
    // console.log('maploaded')
  })
    .setView({
      lat: 35.6762,
      lng: 139.6503,
    }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  addMainMarker();
  addRegularMarker();
}


export { activateMap };
