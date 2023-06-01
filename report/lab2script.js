export const lab2Info = {
  topic:
    "Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.",
  goal:
    "Мета: придбати практичні навички роботи з селекторами, ідентифікаторами, списками, різноманітними властивостями кольору і фону, " +
    "зовнішними тавнутрішними відступами, плаваючими елементами, оформленням текстовихелементів",
  style_methods: "./assets/lab2/styleMethods.png",
  selectors: {
    tag_selector: "./assets/lab2/tag_selector.png",
    class_selector: "./assets/lab2/class_selector.png",
    id_selector: "./assets/lab2/id_selector.png",
    other_selector: "./assets/lab2/other_selector.png",
  },
  css_info: "./assets/lab2/css_info.png",
  conclusion:
    "Висновки роботи: виконуючи лабораторну роботу 2 ми навчилися працювати з селекторами, списками, ідентифікаторами, відступами, плаваючими елементами, та покращили навички оформлення текстових елементів",
};

const placeOut = document.getElementById("place-out");

export function setupSecondLabView() {
  let labNavView = document.getElementById("lab-nav-view");

  // очищуємо div від дочірніх елементів, щоб не було дублювання
  while (labNavView.firstChild) {
    labNavView.removeChild(labNavView.firstChild);
  }

  let topicDiv = document.createElement("div");
  topicDiv.classList.add("chapter");
  topicDiv.innerHTML = "Тема, мета, ЛР №2 Місце розташування сайту, звіту";
  topicDiv.addEventListener("click", showTopicAndGoalInfo);

  let styleMethodsDiv = document.createElement("div");
  styleMethodsDiv.classList.add("chapter");
  styleMethodsDiv.innerHTML = "Способи підключення стилів";
  styleMethodsDiv.addEventListener("click", showStyleMethods);

  let selectorsDiv = document.createElement("div");
  selectorsDiv.classList.add("chapter");
  selectorsDiv.classList.add("without-shadow");
  selectorsDiv.innerHTML = "СЕЛЕКТОРИ:";

  let tagSelectorsDiv = document.createElement("div");
  tagSelectorsDiv.classList.add("inner-chapter");
  tagSelectorsDiv.innerHTML = "Селектори тегу";
  tagSelectorsDiv.addEventListener("click", showTagSelectors);

  let classSelectorsDiv = document.createElement("div");
  classSelectorsDiv.classList.add("inner-chapter");
  classSelectorsDiv.innerHTML = "Селектори класу";
  classSelectorsDiv.addEventListener("click", showClassSelectors);

  let idSelectorsDiv = document.createElement("div");
  idSelectorsDiv.classList.add("inner-chapter");
  idSelectorsDiv.innerHTML = "Селектори ідентифікаторів";
  idSelectorsDiv.addEventListener("click", showIdSelectors);

  let otherSelectorsDiv = document.createElement("div");
  otherSelectorsDiv.classList.add("inner-chapter");
  otherSelectorsDiv.innerHTML = "Інші селектори";
  otherSelectorsDiv.addEventListener("click", showOtherSelectors);

  selectorsDiv.appendChild(tagSelectorsDiv);
  selectorsDiv.appendChild(classSelectorsDiv);
  selectorsDiv.appendChild(idSelectorsDiv);
  selectorsDiv.appendChild(otherSelectorsDiv);

  let cssInfoDiv = document.createElement("div");
  cssInfoDiv.classList.add("chapter");
  cssInfoDiv.innerHTML =
    "CSS: Шрифти Текст Таблиці Фон Контур Списки CSS Просунутий";
  cssInfoDiv.addEventListener("click", showCssInfo);

  let conclusionDiv = document.createElement("div");
  conclusionDiv.classList.add("chapter");
  conclusionDiv.innerHTML = "ВИСНОВКИ до ЛР №2";
  conclusionDiv.addEventListener("click", showConclusion);

  labNavView.appendChild(topicDiv);
  labNavView.appendChild(styleMethodsDiv);
  labNavView.appendChild(selectorsDiv);
  labNavView.appendChild(tagSelectorsDiv);
  labNavView.appendChild(classSelectorsDiv);
  labNavView.appendChild(idSelectorsDiv);
  labNavView.appendChild(otherSelectorsDiv);
  labNavView.appendChild(cssInfoDiv);
  labNavView.appendChild(conclusionDiv);
  showTopicAndGoalInfo();
}

export function showTopicAndGoalInfo() {
  placeOut.textContent = "";

  let topic = document.createElement("p");
  topic.textContent = lab2Info.topic;

  let goal = document.createElement("p");
  goal.textContent = lab2Info.goal;

  placeOut.appendChild(topic);
  placeOut.appendChild(goal);
}

export function showStyleMethods() {
  placeOut.textContent = "";

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "20px";
  contentDiv.style.paddingBottom = "10px";
  contentDiv.style.maxHeight = "580px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img = document.createElement("img");
  img.src = lab2Info.style_methods;
  img.style.width = "1000px";
  img.style.objectFit = "scale-down";

  placeOut.appendChild(contentDiv).appendChild(img);
}

export function showTagSelectors() {
  placeOut.textContent = "";

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "20px";
  contentDiv.style.paddingBottom = "10px";
  contentDiv.style.maxHeight = "580px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img = document.createElement("img");
  img.src = lab2Info.selectors.tag_selector;
  img.style.width = "1000px";
  img.style.objectFit = "scale-down";

  placeOut.appendChild(contentDiv).appendChild(img);
}

export function showClassSelectors() {
  placeOut.textContent = "";

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "20px";
  contentDiv.style.paddingBottom = "10px";
  contentDiv.style.maxHeight = "580px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img = document.createElement("img");
  img.src = lab2Info.selectors.class_selector;
  img.style.width = "1000px";
  img.style.objectFit = "scale-down";

  placeOut.appendChild(contentDiv).appendChild(img);
}

export function showIdSelectors() {
  placeOut.textContent = "";

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "20px";
  contentDiv.style.paddingBottom = "10px";
  contentDiv.style.maxHeight = "580px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img = document.createElement("img");
  img.src = lab2Info.selectors.id_selector;
  img.style.width = "1000px";
  img.style.objectFit = "scale-down";

  placeOut.appendChild(contentDiv).appendChild(img);
}

export function showOtherSelectors() {
  placeOut.textContent = "";

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "20px";
  contentDiv.style.paddingBottom = "10px";
  contentDiv.style.maxHeight = "580px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img = document.createElement("img");
  img.src = lab2Info.selectors.other_selector;
  img.style.width = "1000px";
  img.style.objectFit = "scale-down";

  placeOut.appendChild(contentDiv).appendChild(img);
}

export function showCssInfo() {
  placeOut.textContent = "";

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "20px";
  contentDiv.style.paddingBottom = "10px";
  contentDiv.style.height = "800px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img = document.createElement("img");
  img.src = lab2Info.css_info;
  img.style.width = "1000px";
  img.style.objectFit = "scale-down";

  placeOut.appendChild(contentDiv).appendChild(img);
}

export function showConclusion() {
  placeOut.textContent = "";

  let p = document.createElement("p");
  p.textContent = lab2Info.conclusion;
  p.style.fontSize = "20px";

  placeOut.appendChild(p);
}
