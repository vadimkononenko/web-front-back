import * as lab1 from "./lab1script.js";
import * as lab2 from "./lab2script.js";

lab1.setupFirstLabView();

const laba1 = document.getElementById("laba1");
laba1.onclick = lab1.setupFirstLabView;
const laba2 = document.getElementById("laba2");
laba2.onclick = lab2.setupSecondLabView;