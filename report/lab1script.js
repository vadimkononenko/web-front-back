export const lab1Info = {
  topic:
    "Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. HTML-ДОКУМЕНТІ.",
  goal:
    "Мета: придбати практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. " +
    "Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.",
  info_2: `Вебсайт guidebook по всесвіту «Зоряні війни». На вебсайті доступний вибір по категоріям
        (персонажі, планети, комічні кораблі). В цих розділах в виді карток розташовується зображення обʼєкту
        та детальна інформація про нього, також доступна можливість додати картку в категорію «Обрані». Є можливість
        переглядати на окремій сторінці картки з категорії «Обрані». 
        Функціональні вимоги: відображення карток песонажів, планет, кораблів у колекції по категоріям, 
        можливість додавання конкретної картки до "Обраних", сторінка перегляду категорії "Обрані", створення власних кастомних персонажів, планет, кораблів.
        Нефункціональні вимоги: Наявність, Проста у використанні, Технічне обслуговування.
        `,
  info_3: "lab1_code.png",
  info_4: "lab1.png",
  info_5:
    "Висновки роботи: виконуючи дану лабораторну роботу ми навчились створювати HTML-документ і використовувати елементи, такі як: " +
    "таблиці, зображення, посилання, списки, форми.",
  info_6:
    "Виконали роботу: Кононенко Вадим ІП-05, Комісар Кіріл ІП-05, Рогозний Олексій ІП-05",
};

const placeOut = document.getElementById("place-out");

export function setupFirstLabView() {
  let labNavView = document.getElementById("lab-nav-view");

  // очищуємо div від дочірніх елементів, щоб не було дублювання
  while (labNavView.firstChild) {
    labNavView.removeChild(labNavView.firstChild);
  }

  let topicDiv = document.createElement("div");
  topicDiv.classList.add("chapter");
  topicDiv.innerHTML = "Тема, мета, ЛР №1 Місце розташування сайту, звіту";
  topicDiv.addEventListener("click", showTopicAndGoalInfo);

  let describingDiv = document.createElement("div");
  describingDiv.classList.add("chapter");
  describingDiv.innerHTML = "Опис предметного середовища";
  describingDiv.addEventListener("click", showDescribingInfo);

  let codeDiv = document.createElement("div");
  codeDiv.classList.add("chapter");
  codeDiv.innerHTML = "HTML-код головної сторінки WEB-застосунку";
  codeDiv.addEventListener("click", showCode);

  let appearanceDiv = document.createElement("div");
  appearanceDiv.classList.add("chapter");
  appearanceDiv.innerHTML = "Зовнішній вигляд головної сторінки WEB-застосунку";
  appearanceDiv.addEventListener("click", showAppearanceOfLab);

  let conclusionDiv = document.createElement("div");
  conclusionDiv.classList.add("chapter");
  conclusionDiv.innerHTML = "ВИСНОВКИ до ЛР №1";
  conclusionDiv.addEventListener("click", showConclusion);

  let workersDiv = document.createElement("div");
  workersDiv.classList.add("chapter");
  workersDiv.innerHTML = "ВИКОНАВЦІ";
  workersDiv.addEventListener("click", showWorkers);

  labNavView.appendChild(topicDiv);
  labNavView.appendChild(describingDiv);
  labNavView.appendChild(codeDiv);
  labNavView.appendChild(appearanceDiv);
  labNavView.appendChild(conclusionDiv);
  labNavView.appendChild(workersDiv);
  showTopicAndGoalInfo();
}

export function showTopicAndGoalInfo() {
  placeOut.textContent = "";

  let topic = document.createElement("p");
  topic.textContent = lab1Info.topic;

  let goal = document.createElement("p");
  goal.textContent = lab1Info.goal;

  placeOut.appendChild(topic);
  placeOut.appendChild(goal);
}

export function showDescribingInfo() {
  placeOut.textContent = "";

  let p = document.createElement("p");
  p.textContent = lab1Info.info_2;

  placeOut.appendChild(p);
}

export function showCode() {
  placeOut.textContent = "";

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "20px";
  contentDiv.style.paddingBottom = "10px";
  contentDiv.style.maxHeight = "580px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img = document.createElement("img");
  img.src = "assets/lab1_code.png";
  img.style.width = "1000px";
  img.style.objectFit = "scale-down";

  placeOut.appendChild(contentDiv).appendChild(img);
}

export function showAppearanceOfLab() {
  placeOut.textContent = "";

  let contentDiv = document.createElement("div");
  contentDiv.style.paddingTop = "5px";
  contentDiv.style.paddingBottom = "5px";
  contentDiv.style.maxHeight = "580px";
  contentDiv.style.overflowX = "auto";
  contentDiv.style.overflowY = "auto";

  let img = document.createElement("img");
  img.src = "assets/" + lab1Info.info_4;

  placeOut.appendChild(contentDiv).appendChild(img);
}

export function showConclusion() {
  placeOut.textContent = "";

  let p = document.createElement("p");
  p.textContent = lab1Info.info_5;
  p.style.fontSize = "20px";

  placeOut.appendChild(p);
}

export function showWorkers() {
  placeOut.textContent = "";

  let p = document.createElement("p");
  p.textContent = lab1Info.info_6;

  placeOut.appendChild(p);
}
