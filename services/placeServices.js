"use strict";
var gLocationsArr = [
  { name: "Pukis house", pos: { lat: 32.1416, lng: 34.831213 } },
  { name: "mall", pos: { lat: 30.1428, lng: 37.821293 } },
];
if (!getLocationsArr() || !getLocationsArr().length) {
  saveToStorage("locations", gLocationsArr);
}

function manageAddPlace(obj) {
  var locationsArr = getLocationsArr();
  locationsArr.unshift(obj);
  gLocationsArr = locationsArr;
  saveToStorage("locations", locationsArr);
}
// renderLocations(locationsArr);
function removePlace(place) {
  var locArr = getLocationsArr();
  console.log("1", locArr);
  var idx = locArr.findIndex(function (item) {
    // console.log("place", place);
    // console.log("item.name", item.name);
    // console.log(item.name === place);
    return JSON.stringify(item.pos) === JSON.stringify(place);
  });
  locArr.splice(idx, 1);
  console.log("2", locArr);
  saveToStorage("locations", locArr);
  console.log("idx", idx);
}
