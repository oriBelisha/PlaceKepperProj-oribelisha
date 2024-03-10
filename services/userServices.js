"use strict";
var USERDATA = "userdata";
var userData = loadFromStorage(USERDATA);
function setUserData(user) {
  saveToStorage(USERDATA, user);
  if (!userData) loadFromStorage(USERDATA);
}

function getUsersBirthDate() {
  return getUserData().birthDate;
}
