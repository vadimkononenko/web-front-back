import * as lab1 from "./lab1script.js";
import * as lab2 from "./lab2script.js";

// завантажуємо відображенння навішації для першої лаби
document.addEventListener("DOMContentLoaded", lab1.setupFirstLabView);

function updateInfo(modelNumber) {
  if (modelNumber === 1) {
    lab1.setupFirstLabView();
  } else if (modelNumber === 2) {
    lab2.setupSecondLabView();
  }
}
