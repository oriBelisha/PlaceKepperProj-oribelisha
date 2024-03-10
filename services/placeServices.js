"use strict";
var gLocationsArr = [
  { name: "Pukis house", pos: { lat: 32.1416, lng: 34.831213 } },
  { name: "mall", pos: { lat: 30.1428, lng: 37.821293 } },
];
if (!getLocationsArr() || !getLocationsArr().length) {
  saveToStorage("locations", gLocationsArr);
}

var datax = getData();
function getData() {
  var data = [["name", "lat", "lng"]];
  var arr = getLocationsArr();
  arr.forEach((item) => {
    data.push([item.name, item.pos.lat, item.pos.lng]);
  });
  return data;
}
createCsv(datax);
function createCsv() {
  var arr = getData();
  var csvContent = "";
  arr.forEach((item) => {
    csvContent += item.join(",") + "\n";
  });
  console.log(csvContent);
  return csvContent;
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
  // console.log("2", locArr);
  saveToStorage("locations", locArr);
  // console.log("idx", idx);
}
