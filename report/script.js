import * as lab1 from "./lab1script.js";
import * as lab2 from "./lab2script.js";
import * as lab3 from "./lab3script.js";
import * as lab4 from "./lab4script.js";
import * as lab5 from "./lab5script.js";

// lab1.setupFirstLabView();
lab4.setupFourthLabView();

const laba1 = document.getElementById("laba1");
laba1.onclick = lab1.setupFirstLabView;
const laba2 = document.getElementById("laba2");
laba2.onclick = lab2.setupSecondLabView;
const laba3 = document.getElementById("laba3");
laba3.onclick = lab3.setupSecondLabView;
const laba4 = document.getElementById("laba4");
laba4.onclick = lab4.setupFourthLabView;
const laba5 = document.getElementById("laba5");
laba5.onclick = lab5.setupFifthLabView;
