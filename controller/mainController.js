"use strict";
function onSetSettings() {
  var colors = getSettingsColors();
  document.body.style.backgroundColor = colors.bcgColor;
  document.body.style.color = colors.color;
  var allLinks = [...document.getElementsByTagName("a")];
  allLinks.forEach((item) => {
    item.style.color = colors.color;
  });
  document.querySelector("#submit").style.backgroundColor = colors.bcgColor;
  document.querySelector("#submit").style.color = colors.color;
  //   location.reload();
}

function downloadCSV(el) {
  const csvContent = createCsv();
  console.log(csvContent);
  el.href = "data:text/csv;charset=utf-8," + csvContent;
}

const birthDates = new Date(getUsersBirthDate());

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

function nextBirthday(birthdate) {
  let date = birthdate;
  const timeSpan = date - new Date();
  while (date - new Date() < 0) {
    date.setYear(1900 + date.getYear() + 1);
  }
  return date;
}

function countDown() {
  const tday = new Date();
  const birthDate = nextBirthday(birthDates);
  const timeSpan = birthDate - tday;
  //milliseconds

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  var timeInNums = days + " : " + hours + " : " + minutes + " : " + seconds;
  var timeInText = "";
  if (days) timeInText += "days ";
  if (hours) timeInText += "hours ";
  if (minutes) timeInText += "minutes ";
  if (seconds) timeInText += "seconds";
  // optional to add :
  // console.log(timeInText) ;
  return {
    timeInText,
    timeInNums,
  };
}

function setCountdown() {
  if (!window.location.href.includes("index.html")) {
    // console.log("yayyyy i didi it");
    return;
  }
  var txt = countDown().timeInText;
  document.querySelector("#countdown").innerHTML = countDown().timeInNums;
  document.querySelector(".countdown-text").innerHTML = "Birthday countdown";
}

timerId = setInterval(setCountdown, second);
