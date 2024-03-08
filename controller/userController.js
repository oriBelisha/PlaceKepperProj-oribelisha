"use strict";
function onShowAge(x) {
  document.getElementById("sAge").innerHTML = x;
}

function getElVal(key) {
  return document.querySelector(key).value;
}

function onSubmit(event) {
  var user = {
    email: getElVal("#email"),
    age: parseInt(getElVal("#age")),
    birthDate: getElVal("#b-date"),
    birthTime: getElVal("#b-time"),
    color: getElVal("#txt-color"),
    bcgColor: getElVal("#bcg-color"),
  };
  event.stopPropagation();
  console.log("user ", user);
  console.log("ev", event);
  setUserData(user);
  location.reload();
  //   onSetSettings();
}

// function onSetSettings() {
//   var colors = getSettingsColors();
//   document.body.style.backgroundColor = colors.bcgColor;
//   document.body.style.color = colors.color;
//   allLinks = document.getElementsByTagName("a");
//   allLinks.forEach((item) => {
//     item.style.color = colors.color;
//   });
// }
