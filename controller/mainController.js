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
