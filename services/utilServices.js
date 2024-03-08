"use strict";
var userData = getUserData();

function getSettingsColors() {
  var colors = {
    color: userData.color,
    bcgColor: userData.bcgColor,
  };
  console.log(colors);
  return colors;
}
