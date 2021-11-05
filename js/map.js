/* eslint-disable no-console */
import { activatePage } from './main.js';
import { setAddressField } from './form.js';
import { getRelatedOffer } from './related-offer.js';
import { TOKYO_CENTER_LOCATION } from './data.js';


const map = L.map('map-canvas');

const mainMarkerIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const regularMarkerIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function addMainMarker () {
  const mainMarker = L.marker(
    TOKYO_CENTER_LOCATION,
    {
      draggable: true,
      icon: mainMarkerIcon,
    },
  );

  mainMarker.addTo(map);

  mainMarker.on('move', (evt) => {
    const currentLocation = {
      lat: evt.target.getLatLng().lat.toFixed(5),
      lng: evt.target.getLatLng().lng.toFixed(5),
    };
    setAddressField(currentLocation);
  });
}

function activateMap () {
  map.on('load', () => {
    activatePage();
    addMainMarker();
    setAddressField(TOKYO_CENTER_LOCATION);
  })
    .setView(TOKYO_CENTER_LOCATION, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

}

function addRelatedMarkers (offers) {
  offers.forEach ( (element) => {
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
  });

}


export { activateMap, addRelatedMarkers };
