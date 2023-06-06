export const lab3Info = {
  git_code_link:
    "https://github.com/vadimkononenko/web-front-back/tree/main/lab3",
  git_pages_link: "https://vadimkononenko.github.io/web-front-back/lab3/",
  topic:
    "Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX",
  goal:
    "Мета: придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок, " +
    "придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX",
  template_task: "./assets/lab3/task1.png",
  template_code: "./assets/lab3/task1_html.png",
  tableTask: {
    task2_23: "./assets/lab3/task2_23.png",
    task2_23table: "./assets/lab3/task2_23table.png",
    task23_div_fixed: "./assets/lab3/task23_div_fixed.png",
    task23_div_rubber: "./assets/lab3/task23_div_rubber.png",
  },
  flexTask: {
    flexArScreen: "./assets/lab3/flexArScreen.png",
    flexVkScreen: "./assets/lab3/flexVkScreen.png",
    flexArHtml: "./assets/lab3/flexArHtml.png",
    flexVkHtml: "./assets/lab3/flexVkHtml.png",
    flexArCss: "./assets/lab3/flexArCss.png",
    flexVkCss: "./assets/lab3/flexVkCss.png",
  },
  conclusion:
    "Висновки роботи: виконуючи лабораторну роботу 3 ми придбали практичні навички верстки сторінок з CSS та з'ясували переваги та недоліки типів макетів веб-сторінок. Також ми придбали навички верстки сторінок з CSS та FLEXBOX",
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
  topicDiv.innerHTML = "Тема, мета, ЛР №3 Місце розташування сайту, звіту";
  topicDiv.addEventListener("click", showTopicAndGoalInfo);

  let templateTaskDiv = document.createElement("div");
  templateTaskDiv.classList.add("chapter");
  templateTaskDiv.innerHTML =
    "ЗАВДАННЯ №1. Зовнішній вигляд макету. Код макету";
  templateTaskDiv.addEventListener("click", showTemplate);

  let tableTaskDiv = document.createElement("div");
  tableTaskDiv.classList.add("chapter");
  tableTaskDiv.classList.add("without-shadow");
  tableTaskDiv.innerHTML = "ЗАВДАННЯ №2:";

  let fixedTableDiv = document.createElement("div");
  fixedTableDiv.classList.add("inner-chapter");
  fixedTableDiv.innerHTML = "Таблична верстка";
  fixedTableDiv.addEventListener("click", showFixedTable);

  let rubberTableDiv = document.createElement("div");
  rubberTableDiv.classList.add("inner-chapter");
  rubberTableDiv.innerHTML = "Болокова верстка";
  rubberTableDiv.addEventListener("click", showRubberTable);

  let flexTaskDiv = document.createElement("div");
  flexTaskDiv.classList.add("chapter");
  flexTaskDiv.classList.add("without-shadow");
  flexTaskDiv.innerHTML = "ЗАВДАННЯ №3: FLEXBOX";

  let pageScreenDiv = document.createElement("div");
  pageScreenDiv.classList.add("inner-chapter");
  pageScreenDiv.innerHTML = "Скріншот сторінки (Flexbox)";
  pageScreenDiv.addEventListener("click", showFlexScreen);

  tableTaskDiv.appendChild(fixedTableDiv);
  tableTaskDiv.appendChild(rubberTableDiv);
  tableTaskDiv.appendChild(flexTaskDiv);
  tableTaskDiv.appendChild(pageScreenDiv);

  let pageHtmlDiv = document.createElement("div");
  pageHtmlDiv.classList.add("inner-chapter");
  pageHtmlDiv.innerHTML = "HTML - код (Flexbox)";
  pageHtmlDiv.addEventListener("click", showFlexHtml);

  let pageCssDiv = document.createElement("div");
  pageCssDiv.classList.add("inner-chapter");
  pageCssDiv.innerHTML = "CSS - код (Flexbox)";
  pageCssDiv.addEventListener("click", showFlexCss);

  let conclusionDiv = document.createElement("div");
  conclusionDiv.classList.add("chapter");
  conclusionDiv.innerHTML = "ВИСНОВКИ до ЛР №3";
  conclusionDiv.addEventListener("click", showConclusion);

  labNavView.appendChild(topicDiv);
  labNavView.appendChild(templateTaskDiv);
  labNavView.appendChild(tableTaskDiv);
  labNavView.appendChild(fixedTableDiv);
  labNavView.appendChild(rubberTableDiv);
  labNavView.appendChild(flexTaskDiv);
  labNavView.appendChild(pageScreenDiv);
  labNavView.appendChild(pageHtmlDiv);
  labNavView.appendChild(pageCssDiv);
  labNavView.appendChild(conclusionDiv);
  showTopicAndGoalInfo();
}

export function showTopicAndGoalInfo() {
  clearContentFromPlaceOut();

  let gitCodeLink = document.createElement("a");
  gitCodeLink.innerHTML = "[code] Посилання на Github";
  gitCodeLink.href = lab3Info.git_code_link;
  gitCodeLink.classList.add("git-link-appearance");

  let gitPagesLink = document.createElement("a");
  gitPagesLink.innerHTML = "[pages] Посилання на Github";
  gitPagesLink.href = lab3Info.git_pages_link;
  gitPagesLink.classList.add("git-link-appearance");

  let brEl1 = document.createElement("br");
  let brEl2 = document.createElement("br");
  let brEl3 = document.createElement("br");

  let topic = document.createElement("p");
  topic.textContent = lab3Info.topic;

  let goal = document.createElement("p");
  goal.textContent = lab3Info.goal;

  placeOut.appendChild(topic);
  placeOut.appendChild(brEl1);
  placeOut.appendChild(goal);
  placeOut.appendChild(brEl2);
  placeOut.appendChild(gitCodeLink);
  placeOut.appendChild(brEl3);
  placeOut.appendChild(gitPagesLink);
}
//добавить ещё скрин кода
export function showTemplate() {
  clearContentFromPlaceOut();

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "20px";
  contentDiv.style.paddingBottom = "10px";
  contentDiv.style.maxHeight = "850px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img = document.createElement("img");
  img.src = lab3Info.template_task;
  img.style.width = "1000px";
  img.style.objectFit = "scale-down";

  let img2 = document.createElement("img");
  img2.src = lab3Info.template_code;
  img2.style.width = "1000px";
  img2.style.objectFit = "scale-down";

  placeOut.appendChild(contentDiv);
  contentDiv.appendChild(img);
  contentDiv.appendChild(img2);
}

export function showFixedTable() {
  clearContentFromPlaceOut();

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "20px";
  contentDiv.style.paddingBottom = "10px";
  contentDiv.style.maxHeight = "850px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img = document.createElement("img");
  img.src = lab3Info.tableTask.task2_23;
  img.style.width = "1000px";
  img.style.objectFit = "scale-down";

  let img2 = document.createElement("img");
  img2.src = lab3Info.tableTask.task2_23table;
  img2.style.width = "1000px";
  img2.style.objectFit = "scale-down";

  placeOut.appendChild(contentDiv);
  contentDiv.appendChild(img);
  contentDiv.appendChild(img2);
}

export function showRubberTable() {
  clearContentFromPlaceOut();

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "20px";
  contentDiv.style.paddingBottom = "10px";
  contentDiv.style.maxHeight = "850px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img3 = document.createElement("img");
  img3.src = lab3Info.tableTask.task2_23;
  img3.style.width = "1000px";
  img3.style.objectFit = "scale-down";

  let img = document.createElement("img");
  img.src = lab3Info.tableTask.task23_div_fixed;
  img.style.width = "1000px";
  img.style.objectFit = "scale-down";

  let img2 = document.createElement("img");
  img2.src = lab3Info.tableTask.task23_div_rubber;
  img2.style.width = "1000px";
  img2.style.objectFit = "scale-down";

  placeOut.appendChild(contentDiv);
  contentDiv.appendChild(img3);
  contentDiv.appendChild(img);
  contentDiv.appendChild(img2);
}

export function showFlexScreen() {
  clearContentFromPlaceOut();

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "20px";
  contentDiv.style.paddingBottom = "10px";
  contentDiv.style.height = "850px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img = document.createElement("img");
  img.src = lab3Info.flexTask.flexArScreen;
  img.style.width = "1000px";
  img.style.objectFit = "scale-down";

  let img2 = document.createElement("img");
  img2.src = lab3Info.flexTask.flexVkScreen;
  img2.style.width = "1000px";
  img2.style.objectFit = "scale-down";

  placeOut.appendChild(contentDiv);
  contentDiv.appendChild(img);
  contentDiv.appendChild(img2);
}

export function showFlexHtml() {
  clearContentFromPlaceOut();

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "20px";
  contentDiv.style.paddingBottom = "10px";
  contentDiv.style.height = "850px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img = document.createElement("img");
  img.src = lab3Info.flexTask.flexArHtml;
  img.style.width = "1000px";
  img.style.objectFit = "scale-down";

  let img2 = document.createElement("img");
  img2.src = lab3Info.flexTask.flexVkHtml;
  img2.style.width = "1000px";
  img2.style.objectFit = "scale-down";

  placeOut.appendChild(contentDiv);
  contentDiv.appendChild(img);
  contentDiv.appendChild(img2);
}

export function showFlexCss() {
  clearContentFromPlaceOut();

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "20px";
  contentDiv.style.paddingBottom = "10px";
  contentDiv.style.height = "850px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img = document.createElement("img");
  img.src = lab3Info.flexTask.flexArCss;
  img.style.width = "1000px";
  img.style.objectFit = "scale-down";

  let img2 = document.createElement("img");
  img2.src = lab3Info.flexTask.flexVkCss;
  img2.style.width = "1000px";
  img2.style.objectFit = "scale-down";

  placeOut.appendChild(contentDiv);
  contentDiv.appendChild(img);
  contentDiv.appendChild(img2);
}

export function showConclusion() {
  clearContentFromPlaceOut();

  let p = document.createElement("p");
  p.textContent = lab3Info.conclusion;
  p.style.fontSize = "20px";

  placeOut.appendChild(p);
}

function clearContentFromPlaceOut() {
  placeOut.textContent = "";
}
