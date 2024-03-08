"use strict";
const options = {};

function onGetPosition() {
  // Feature detection
  if (!navigator.geolocation) {
    alert("HTML5 Geolocation is not supported in your browser.");
    return;
  }

  // One shot position getting or continus watch
  navigator.geolocation.getCurrentPosition(
    showLocation,
    handleLocationError,
    options
  );
  //   navigator.geolocation.watchPosition(showLocation, handleLocationError);
}

function showLocation(position) {
  //   console.log("pos", position);
  //   document.getElementById("latitude").innerHTML = position.coords.latitude;
  //   document.getElementById("longitude").innerHTML = position.coords.longitude;
  //   document.getElementById("accuracy").innerHTML = position.coords.accuracy;

  //   var date = new Date(position.timestamp);
  //   document.getElementById("timestamp").innerHTML =
  //     date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  initMap(position.coords.latitude, position.coords.longitude);
}

function handleLocationError(error) {
  var locationError = document.getElementById("locationError");

  switch (error.code) {
    case 0:
      locationError.innerHTML =
        "There was an error while retrieving your location: " + error.message;
      break;
    case 1:
      locationError.innerHTML =
        "The user didn't allow this page to retrieve a location.";
      break;
    case 2:
      locationError.innerHTML =
        "The browser was unable to determine your location: " + error.message;
      break;
    case 3:
      locationError.innerHTML =
        "The browser timed out before retrieving the location.";
      break;
  }
}

function initMap(lat, lng) {
  var elMap = document.querySelector("#map");
  var options = {
    zoom: 14,
    center: { lat: 29.55805, lng: 34.94821 },
    enableHighAccuracy: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: false,
    mapTypeId: "hybrid",
  };

  var map = new google.maps.Map(elMap, options);
  var userLocation = {
    lat,
    lng,
  };
  map.addListener("click", function (event) {
    addMarker(event.latLng, map);
  });
  var buttonControlDiv = document.createElement("div");
  var buttonToRemove = document.querySelector(".gmnoprint");
  console.log(buttonToRemove);
  var buttonControl = new customButtonControl(
    buttonControlDiv,
    map,
    userLocation
  );
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(buttonControlDiv);
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].splice(1, 1);
}
function customButtonControl(controlDiv, map, userLocation) {
  // Set CSS for the control button
  var button = document.createElement("div");
  var image = document.createElement("img");
  image.src = "./imag/myLocation.png";
  button.className = "custom-button";
  controlDiv.appendChild(button);

  // Setup click event listener
  button.addEventListener("click", () => {
    map.setCenter(userLocation);
  });
}

function addMarker(location, map) {
  var place = prompt("locations name?");
  if (!place) return;
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  var locationObj = { name: place, pos: marker.position };
  manageAddPlace(locationObj);
  renderLocations(getLocationsArr());
}

function renderLocations(arr) {
  var strHTMLS = ``;
  arr.forEach((element) => {
    strHTMLS += `
        <div class="location-items">
        <div class="title-div"><span>${element.name} </span><button class="remove" onclick="onRemovePlace(this)">x</button></div>
        <div id="lat">lat: ${element.pos.lat}</div>
        <div id="lng">lng: ${element.pos.lng}</div></div>
        <hr/>`;
  });
  document.querySelector(".locations-container").innerHTML =
    strHTMLS.split(",");
}

function onRemovePlace(x) {
  var locObj = extractLatLng(x);
  console.log(locObj);
  removePlace(locObj);
  renderLocations(getLocationsArr());
}

function extractLatLng(x) {
  var xParent = x.parentNode;
  var xGrandParent = xParent.parentNode;
  var lat = xGrandParent.querySelector("#lat").innerHTML;
  lat = lat.split(" ");
  lat = parseFloat(lat[1]);
  var lng = xGrandParent.querySelector("#lng").innerHTML;
  lng = lng.split(" ");
  lng = parseFloat(lng[1]);
  return {
    lat: lat,
    lng: lng,
  };
}

function onRender() {
  console.log("onrender");

  renderLocations(getLocationsArr());
  onSetSettings();
  console.log(getLocationsArr());
}
