"use strict";
function onShowAge(x) {
  document.getElementById("sAge").innerHTML = x;
}

function getElVal(key) {
  return document.querySelector(key).value;
}

function onSubmit(event) {
  var age = parseInt(getElVal("#age"));
  var birthDate = getElVal("#b-date");
  var ageCheck = getAge(birthDate);
  var color = getElVal("#txt-color");
  var bcgColor = getElVal("#bcg-color");
  var birthTime = getElVal("#b-time");
  if (bcgColor === color) {
    alert("ERROR: cant set identical colors!");
    return;
  }
  if (age !== ageCheck) {
    alert("ERROR: age and birth date doesnt match");
    return;
  }

  var user = {
    email: getElVal("#email"),
    age,
    birthDate,
    birthTime,
    color,
    bcgColor,
    gender: getElVal("#gender"),
  };
  event.stopPropagation();
  console.log("user ", user);
  console.log("ev", event);
  setUserData(user);
  location.reload();
}

function getTimeTillNextBday() {}

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
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
