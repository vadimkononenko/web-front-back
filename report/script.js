// import { name } from "./lab2script.js";
// import { name2 } from "./lab3script.js";
import * as lab1 from "./lab1script.js";

// завантажуємо відображенння навішації для першої лаби
document.addEventListener("DOMContentLoaded", lab1.setupFirstLabView);

function updateInfo(modelNumber) {
  if (modelNumber === 1) {
    lab1.setupFirstLabView();
  }
}
