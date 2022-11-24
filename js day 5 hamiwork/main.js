const elBlows = document.querySelector(".bag__cart"); //sharlar border qizil
const elBlowsK = document.querySelector(".bag__itim"); // sharlay sariq 3 border
const elInput = document.querySelector("#inputitm"); // input yoziv
const elButtonS = document.querySelector(".inpot__itim"); // buttonlar otasi
const elButton = document.querySelector(".button__itms"); // batinlar 123456789
const elForm = document.querySelector(".forim");
const elButtonitm = document.querySelector(".buton__form");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (elInput.value < 10) {
    elBlows.style.border = "2px solid red";
    elBlowsK.style.border = "none";
  } else if (elInput.value > 9) {
    elBlows.style.border = "none";
    elBlowsK.style.border = "2px solid yellow";
  } else {
  }
});
