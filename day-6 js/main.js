const daysWeek = document.querySelector("#form__box");
const inputItim = document.querySelector("#input");
const buttonyim = document.querySelector("#button");
const elText = document.querySelector(".text__itm");

const text = document.querySelector("p");
daysWeek.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let bag = Number(inputItim.value);
  if (bag === 1) {
    text.textContent = "Dushanba";
  } else if (bag === 2) {
    text.textContent = "seshanba";
  } else if (bag === 3) {
    text.textContent = "chorshanba";
  } else if (bag === 4) {
    text.textContent = "payshanba";
  } else if (bag === 5) {
    text.textContent = "juma";
  } else if (bag === 6) {
    text.textContent = "shanba";
  } else if (bag === 7) {
    text.textContent = "yakshanba;";
  } else {
    text.textContent = "1 dan 7 gacha bo'lgan son kiriting!";
  }
});
