/* eslint-disable no-console */
import { activatePage } from './main.js';
import { setAddressField } from './form.js';
import { getRelatedOffer } from './related-offer.js';
import { TokyoCenterLocation } from './data.js';


const map = L.map('map-canvas');
const relatedMarkersGroup = L.layerGroup();

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

const mainMarker = L.marker(
  {
    lat:TokyoCenterLocation.LAT,
    lng:TokyoCenterLocation.LNG,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

const layer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
);


function addMainMarker () {

  mainMarker.addTo(map);

  mainMarker.on('move', (evt) => {
    const currentLocation = {
      lat: evt.target.getLatLng().lat.toFixed(5),
      lng: evt.target.getLatLng().lng.toFixed(5),
    };
    setAddressField(`${currentLocation.lat}, ${currentLocation.lng}`);
  });
}

function resetMap () {
  mainMarker.setLatLng({
    lat:TokyoCenterLocation.LAT,
    lng:TokyoCenterLocation.LNG,
  });
  map.closePopup();
}

function activateMap () {
  map.on('load', () => {
    activatePage();
    addMainMarker();
    setAddressField(`${TokyoCenterLocation.LAT}, ${TokyoCenterLocation.LNG}`);
  })
    .setView({
      lat:TokyoCenterLocation.LAT,
      lng:TokyoCenterLocation.LNG,
    }, 12);

  layer.addTo(map);

}


function addRelatedMarkers (offers) {

  map.closePopup();
  relatedMarkersGroup.clearLayers();

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
      .addTo(relatedMarkersGroup)
      .bindPopup(getRelatedOffer(element));
  });
  relatedMarkersGroup.addTo(map);

}

// function addRelatedMarkers (offers) {

//   map.closePopup();
//   const relatedMarkersGroup = L.layerGroup;

//   offers.forEach ( (element) => {
//     const regularMarker = L.marker(
//       {
//         lat: element.location.lat,
//         lng: element.location.lng,
//       },
//       {
//         icon: regularMarkerIcon,
//       },
//     );

//     regularMarker
//       .addTo(map)
//       .bindPopup(getRelatedOffer(element));
//   });

// }


export { activateMap, addRelatedMarkers, resetMap };
