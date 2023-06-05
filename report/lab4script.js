export const lab4Info = {
    git_code_link: "https://github.com/vadimkononenko/web-front-back/tree/main/lab4",
    git_pages_link: "https://vadimkononenko.github.io/web-front-back/lab4",
    git_pages_link_lab4_vk: "https://vadimkononenko.github.io/web-front-back/lab4/lab4_VK.html",
    git_pages_link_lab4_ar: "https://vadimkononenko.github.io/web-front-back/lab4/lab4_AR.html",
    git_pages_link_lab4_kk: "https://vadimkononenko.github.io/web-front-back/lab4/lab4_KK.html",
    topic:
        "Тема: ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT",
    goal:
        "Мета: придбати практичні навички роботи з масивами у js-сценаріях. Реалізація програм засовами мови JAVASCRIPT",
    vk: {
        task1: "./assets/lab4/vk_task1.png",
        menu_task: "./assets/lab4/vk_menu.png",
        page_code: "./assets/lab4/vk_page.png",
        js_code: "./assets/lab4/vk_js_code.png",
    },
    ar: {
        gist: "./assets/lab4/ar_gist.png",
        task2: "./assets/lab4/ar_task2.png",
        page_code: "./assets/lab4/ar_code.png",
        js_code: "./assets/lab4/ar_js_code.png"
    },
    kk: {
        form_task: "./assets/lab4/kk_form.png",
        page_code: "./assets/lab4/kk_code.png",
        js_code: "./assets/lab4/kk_js_code.png"
    },
    conclusion:
        "Висновки роботи: виконуючи лабораторну роботу 2 ми навчилися працювати з селекторами, списками, ідентифікаторами, відступами, плаваючими елементами, та покращили навички оформлення текстових елементів",
};

const placeOut = document.getElementById("place-out");

export function setupFourthLabView() {
    let labNavView = document.getElementById("lab-nav-view");

    // очищуємо div від дочірніх елементів, щоб не було дублювання
    while (labNavView.firstChild) {
        labNavView.removeChild(labNavView.firstChild);
    }

    let topicDiv = document.createElement("div");
    topicDiv.classList.add("chapter");
    topicDiv.innerHTML = "Тема, мета, ЛР №4 Місце розташування сайту, звіту";
    topicDiv.addEventListener("click", showTopicAndGoalInfo);

    let funcUsingDiv = document.createElement("div");
    funcUsingDiv.classList.add("chapter");
    funcUsingDiv.innerHTML = "Способи функціонального застосування JavaScript";
    // styleMethodsDiv.addEventListener("click", showStyleMethods);

    let urlSchemaDiv = document.createElement("div");
    urlSchemaDiv.classList.add("inner-chapter");
    urlSchemaDiv.innerHTML = "Схема URL";
    // urlSchemaDiv.addEventListener("click", showTagSelectors);

    let eventDiv = document.createElement("div");
    eventDiv.classList.add("inner-chapter");
    eventDiv.innerHTML = "Обробник подій";
    // eventDiv.addEventListener("click", showClassSelectors);

    let entityDiv = document.createElement("div");
    entityDiv.classList.add("inner-chapter");
    entityDiv.innerHTML = "Підстановка (entity)";
    // idSelectorsDiv.addEventListener("click", showIdSelectors);

    let tagScriptDiv = document.createElement("div");
    tagScriptDiv.classList.add("inner-chapter");
    tagScriptDiv.innerHTML = "script";
    // otherSelectorsDiv.addEventListener("click", showOtherSelectors);

    let arraysDiv = document.createElement("div");
    arraysDiv.classList.add("chapter");
    arraysDiv.innerHTML = "Масиви (4)";
    arraysDiv.addEventListener("click", showArrays);

    let implSixDiv = document.createElement("div");
    implSixDiv.classList.add("chapter");
    implSixDiv.innerHTML = "Виконання (6)";
    // conclusionDiv.addEventListener("click", showConclusion);

    labNavView.appendChild(topicDiv);
    labNavView.appendChild(funcUsingDiv);
    labNavView.appendChild(urlSchemaDiv);
    labNavView.appendChild(eventDiv);
    labNavView.appendChild(entityDiv);
    labNavView.appendChild(tagScriptDiv);
    labNavView.appendChild(arraysDiv);
    labNavView.appendChild(implSixDiv);

    showTopicAndGoalInfo();
}

export function showTopicAndGoalInfo() {
    clearContentFromPlaceOut();

    let gitCodeLink = document.createElement("a");
    gitCodeLink.innerHTML = "[code] Посилання на Github";
    gitCodeLink.href = lab4Info.git_code_link;
    gitCodeLink.classList.add("git-link-appearance");

    let gitPagesLink = document.createElement("a");
    gitPagesLink.innerHTML = "[pages] Посилання на Github";
    gitPagesLink.href = lab4Info.git_pages_link;
    gitPagesLink.classList.add("git-link-appearance");

    let gitPagesLinkLab4AR = document.createElement("a");
    gitPagesLinkLab4AR.innerHTML = "[pages lab4_AR] Посилання на Github";
    gitPagesLinkLab4AR.href = lab4Info.git_pages_link_lab4_ar;
    gitPagesLinkLab4AR.classList.add("git-link-appearance");

    let gitPagesLinkLab4KK = document.createElement("a");
    gitPagesLinkLab4KK.innerHTML = "[pages lab4_KK] Посилання на Github";
    gitPagesLinkLab4KK.href = lab4Info.git_pages_link_lab4_kk;
    gitPagesLinkLab4KK.classList.add("git-link-appearance");

    let brEl1 = document.createElement("br");
    let brEl2 = document.createElement("br");
    let brEl3 = document.createElement("br");
    let brEl4 = document.createElement("br");
    let brEl5 = document.createElement("br");

    let topic = document.createElement("p");
    topic.textContent = lab4Info.topic;

    let goal = document.createElement("p");
    goal.textContent = lab4Info.goal;

    placeOut.appendChild(topic);
    placeOut.appendChild(brEl1);
    placeOut.appendChild(goal);
    placeOut.appendChild(brEl2);
    placeOut.appendChild(gitCodeLink);
    placeOut.appendChild(brEl3);
    placeOut.appendChild(gitPagesLink);
    placeOut.appendChild(brEl4);
    placeOut.appendChild(gitPagesLinkLab4AR);
    placeOut.appendChild(brEl5);
    placeOut.appendChild(gitPagesLinkLab4KK);
}

export function showURLSchema() {
    clearContentFromPlaceOut();

    let contentDiv = document.createElement("div");
    contentDiv.style.paddingTop = "20px";
    contentDiv.style.paddingBottom = "10px";
    contentDiv.style.maxHeight = "580px";
    contentDiv.style.overflowX = "auto";
    contentDiv.style.overflowY = "auto";

    let img = document.createElement("img");
    img.src = lab4Info.style_methods;
    img.style.width = "1000px";
    img.style.objectFit = "scale-down";

    placeOut.appendChild(contentDiv).appendChild(img);
}

export function showArrays() {
    clearContentFromPlaceOut();

    let contentDiv = document.createElement("div");
    contentDiv.style.paddingTop = "20px";
    contentDiv.style.paddingBottom = "10px";
    contentDiv.style.maxHeight = "730px";
    contentDiv.style.overflowX = "auto";
    contentDiv.style.overflowY = "auto";

    let vk = document.createElement("p");
    vk.textContent = "ІП-05 Кононенко Вадим (Варіант 12)";

    let vkArraysLink = document.createElement("a");
    vkArraysLink.innerHTML = "[сторінка з завданням]";
    vkArraysLink.href = lab4Info.git_pages_link_lab4_vk;
    vkArraysLink.classList.add("git-link-appearance");

    let vkTask1Img = document.createElement("img");
    vkTask1Img.src = lab4Info.vk.task1;
    vkTask1Img.style.width = "1000px";
    vkTask1Img.style.height = "400px";
    vkTask1Img.style.objectFit = "scale-down";

    let vkPageImg = document.createElement("img");
    vkPageImg.src = lab4Info.vk.page_code;
    vkPageImg.style.width = "1000px";
    vkPageImg.style.objectFit = "scale-down";

    let vkJSCodeImg = document.createElement("img");
    vkJSCodeImg.src = lab4Info.vk.js_code;
    vkJSCodeImg.style.width = "1000px";
    vkJSCodeImg.style.objectFit = "scale-down";

    let vkMenuImg = document.createElement("img");
    vkMenuImg.src = lab4Info.vk.menu_task;
    vkMenuImg.style.width = "1000px";
    vkMenuImg.style.height = "500px";
    vkMenuImg.style.objectFit = "scale-down";


    let ar = document.createElement("p");
    ar.textContent = "ІП-05 Рогозний Олексій (Варіант ...)";

    let arArraysLink = document.createElement("a");
    arArraysLink.innerHTML = "[сторінка з завданням]";
    arArraysLink.href = lab4Info.git_pages_link_lab4_ar;
    arArraysLink.classList.add("git-link-appearance");

    let arGistImg = document.createElement("img");
    arGistImg.src = lab4Info.ar.gist;
    arGistImg.style.width = "1000px";
    arGistImg.style.height = "500px";
    arGistImg.style.objectFit = "scale-down";

    let arTask2Img = document.createElement("img");
    arTask2Img.src = lab4Info.ar.task2;
    arTask2Img.style.width = "1000px";
    arTask2Img.style.height = "700px";
    arTask2Img.style.objectFit = "scale-down";

    let arPageCodeImg = document.createElement("img");
    arPageCodeImg.src = lab4Info.ar.page_code;
    arPageCodeImg.style.width = "1000px";
    arPageCodeImg.style.objectFit = "scale-down";

    let arJSCodeImg = document.createElement("img");
    arJSCodeImg.src = lab4Info.ar.js_code;
    arJSCodeImg.style.width = "1000px";
    arJSCodeImg.style.objectFit = "scale-down";


    let kk = document.createElement("p");
    kk.textContent = "ІП-05 Комісар Кіріл (Варіант 11)";

    let kkArraysLink = document.createElement("a");
    kkArraysLink.innerHTML = "[сторінка з завданням]";
    kkArraysLink.href = lab4Info.git_pages_link_lab4_kk;
    kkArraysLink.classList.add("git-link-appearance");

    let kkFormImg = document.createElement("img");
    kkFormImg.src = lab4Info.kk.form_task;
    kkFormImg.style.width = "1000px";
    kkFormImg.style.height = "380px";
    kkFormImg.style.objectFit = "scale-down";

    let kkPageCodeImg = document.createElement("img");
    kkPageCodeImg.src = lab4Info.ar.page_code;
    kkPageCodeImg.style.width = "1000px";
    kkPageCodeImg.style.objectFit = "scale-down";

    let kkJSCodeImg = document.createElement("img");
    kkJSCodeImg.src = lab4Info.kk.js_code;
    kkJSCodeImg.style.width = "1000px";
    kkJSCodeImg.style.objectFit = "scale-down";

    placeOut.appendChild(contentDiv)

    contentDiv.appendChild(vk);
    contentDiv.appendChild(vkArraysLink);
    contentDiv.appendChild(vkTask1Img);
    contentDiv.appendChild(vkPageImg);
    contentDiv.appendChild(vkMenuImg);
    contentDiv.appendChild(vkJSCodeImg);

    contentDiv.appendChild(ar);
    contentDiv.appendChild(arArraysLink);
    contentDiv.appendChild(arGistImg);
    contentDiv.appendChild(arTask2Img);
    contentDiv.appendChild(arPageCodeImg);
    contentDiv.appendChild(arJSCodeImg);

    contentDiv.appendChild(kk);
    contentDiv.appendChild(kkArraysLink);
    contentDiv.appendChild(kkFormImg);
    contentDiv.appendChild(kkPageCodeImg);
    contentDiv.appendChild(kkJSCodeImg);
}

function clearContentFromPlaceOut() {
    placeOut.textContent = "";
}