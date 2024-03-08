"use strict";

function saveToStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
  console.log("lolo");
}
function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
function getUserData() {
  return JSON.parse(localStorage.getItem("userdata"));
}
function getLocationsArr() {
  return JSON.parse(localStorage.getItem("locations"));
}
