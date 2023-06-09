export const lab4Info = {
    git_code_link: "https://github.com/vadimkononenko/web-front-back/tree/main/lab4",
    git_pages_link: "https://vadimkononenko.github.io/web-front-back/lab4",
    git_pages_link_func_using: "https://vadimkononenko.github.io/web-front-back/lab4/func_using.html",
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
        styles_menu: "./assets/lab4/vk_styles_menu.png",
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
    google_link: "./assets/lab4/google_link.png",
    google_link_html: "./assets/lab4/google_link_html.png",
    advice: "./assets/lab4/advice.png",
    advice_html: "./assets/lab4/advice_html.png",
    advice_alert: "./assets/lab4/advice_alert.png",
    secret_html: "./assets/lab4/secret_html.png",
    secret_alert: "./assets/lab4/secret_alert.png",
    insertion: "./assets/lab4/insertion.png",
    insertion_code: "./assets/lab4/insertion_code.png",
    conclusion:
        "Висновки роботи: внаслідок виконання лабораторної роботи було удосконалено головну сторінку нашого проєкту та придбано практичні навички функціонального застосування JavaScript у HTML-документі, були використані масиви та реалізували сторінки мовою JavaScript.",
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
    urlSchemaDiv.addEventListener("click", showURLSchema);

    let eventDiv = document.createElement("div");
    eventDiv.classList.add("inner-chapter");
    eventDiv.innerHTML = "Обробник подій";
    eventDiv.addEventListener("click", showEvenListener);

    let entityDiv = document.createElement("div");
    entityDiv.classList.add("inner-chapter");
    entityDiv.innerHTML = "Підстановка (entity)";
    entityDiv.addEventListener("click", showEntity);

    let tagScriptDiv = document.createElement("div");
    tagScriptDiv.classList.add("inner-chapter");
    tagScriptDiv.innerHTML = "script";
    tagScriptDiv.addEventListener("click", showScript);

    let arraysDiv = document.createElement("div");
    arraysDiv.classList.add("chapter");
    arraysDiv.innerHTML = "Масиви (4)";
    arraysDiv.addEventListener("click", showArrays);

    let implSixDiv = document.createElement("div");
    implSixDiv.classList.add("chapter");
    implSixDiv.innerHTML = "Виконання (6)";
    implSixDiv.addEventListener("click", showImplSix);

    let conclusionDiv = document.createElement("div");
    conclusionDiv.classList.add("chapter");
    conclusionDiv.innerHTML = "Висновки";
    conclusionDiv.addEventListener("click", showConclusion);

    labNavView.appendChild(topicDiv);
    labNavView.appendChild(funcUsingDiv);
    labNavView.appendChild(urlSchemaDiv);
    labNavView.appendChild(eventDiv);
    labNavView.appendChild(entityDiv);
    labNavView.appendChild(tagScriptDiv);
    labNavView.appendChild(arraysDiv);
    labNavView.appendChild(implSixDiv);
    labNavView.appendChild(conclusionDiv);

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
    contentDiv.style.maxHeight = "850px";
    contentDiv.style.overflowX = "auto";
    contentDiv.style.overflowY = "auto";

    let funcUsingLink = document.createElement("a");
    funcUsingLink.innerHTML = "[сторінка з функціональними застосуванням]";
    funcUsingLink.href = lab4Info.git_pages_link_func_using;
    funcUsingLink.classList.add("git-link-appearance");

    let img = document.createElement("img");
    img.src = lab4Info.google_link;
    img.style.width = "1000px";
    img.style.objectFit = "scale-down";

    let img1 = document.createElement("img");
    img1.src = lab4Info.google_link_html;
    img1.style.width = "1000px";
    img1.style.objectFit = "scale-down";

    placeOut.appendChild(contentDiv);

    contentDiv.appendChild(funcUsingLink);
    contentDiv.appendChild(img);
    contentDiv.appendChild(img1);
}

function showEvenListener() {
    clearContentFromPlaceOut();

    let contentDiv = document.createElement("div");
    contentDiv.style.paddingTop = "20px";
    contentDiv.style.paddingBottom = "10px";
    contentDiv.style.maxHeight = "850px";
    contentDiv.style.overflowX = "auto";
    contentDiv.style.overflowY = "auto";

    let funcUsingLink = document.createElement("a");
    funcUsingLink.innerHTML = "[сторінка з функціональними застосуванням]";
    funcUsingLink.href = lab4Info.git_pages_link_func_using;
    funcUsingLink.classList.add("git-link-appearance");

    let img1 = document.createElement("img");
    img1.src = lab4Info.advice;
    img1.style.width = "1000px";
    img1.style.objectFit = "scale-down";

    let img2 = document.createElement("img");
    img2.src = lab4Info.advice_alert;
    img2.style.width = "1000px";
    img2.style.objectFit = "scale-down";

    let img3 = document.createElement("img");
    img3.src = lab4Info.advice_html;
    img3.style.width = "1000px";
    img3.style.objectFit = "scale-down";

    placeOut.appendChild(contentDiv);

    contentDiv.appendChild(funcUsingLink);
    contentDiv.appendChild(img1);
    contentDiv.appendChild(img2);
    contentDiv.appendChild(img3);
}

function showEntity() {
    clearContentFromPlaceOut();

    let contentDiv = document.createElement("div");
    contentDiv.style.paddingTop = "20px";
    contentDiv.style.paddingBottom = "10px";
    contentDiv.style.maxHeight = "850px";
    contentDiv.style.overflowX = "auto";
    contentDiv.style.overflowY = "auto";

    let funcUsingLink = document.createElement("a");
    funcUsingLink.innerHTML = "[сторінка з функціональними застосуванням]";
    funcUsingLink.href = lab4Info.git_pages_link_func_using;
    funcUsingLink.classList.add("git-link-appearance");

    let img3 = document.createElement("img");
    img3.src = lab4Info.secret;
    img3.style.width = "1000px";
    img3.style.objectFit = "scale-down";

    let img4 = document.createElement("img");
    img4.src = lab4Info.secret_alert;
    img4.style.width = "1000px";
    img4.style.objectFit = "scale-down";

    let img5 = document.createElement("img");
    img5.src = lab4Info.secret_html;
    img5.style.width = "1000px";
    img5.style.objectFit = "scale-down";

    placeOut.appendChild(contentDiv);

    contentDiv.appendChild(funcUsingLink);
    contentDiv.appendChild(img3);
    contentDiv.appendChild(img4);
    contentDiv.appendChild(img5);
}

function showScript() {
    clearContentFromPlaceOut();

    let contentDiv = document.createElement("div");
    contentDiv.style.paddingTop = "20px";
    contentDiv.style.paddingBottom = "10px";
    contentDiv.style.maxHeight = "850px";
    contentDiv.style.overflowX = "auto";
    contentDiv.style.overflowY = "auto";

    let funcUsingLink = document.createElement("a");
    funcUsingLink.innerHTML = "[сторінка з функціональними застосуванням]";
    funcUsingLink.href = lab4Info.git_pages_link_func_using;
    funcUsingLink.classList.add("git-link-appearance");

    let img5 = document.createElement("img");
    img5.src = lab4Info.insertion;
    img5.style.width = "1000px";
    img5.style.objectFit = "scale-down";

    let img6 = document.createElement("img");
    img6.src = lab4Info.insertion_code;
    img6.style.width = "1000px";
    img6.style.objectFit = "scale-down";

    placeOut.appendChild(contentDiv);

    contentDiv.appendChild(funcUsingLink);
    contentDiv.appendChild(img5);
    contentDiv.appendChild(img6);
}

export function showArrays() {
    clearContentFromPlaceOut();

    let contentDiv = document.createElement("div");
    contentDiv.style.paddingTop = "20px";
    contentDiv.style.paddingBottom = "10px";
    contentDiv.style.maxHeight = "850px";
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
    contentDiv.appendChild(vkJSCodeImg);

    contentDiv.appendChild(ar);
    contentDiv.appendChild(arArraysLink);
    contentDiv.appendChild(arGistImg);
    contentDiv.appendChild(arPageCodeImg);
    contentDiv.appendChild(arJSCodeImg);

    contentDiv.appendChild(kk);
    contentDiv.appendChild(kkArraysLink);
    contentDiv.appendChild(kkJSCodeImg);
}

export function showImplSix() {
    clearContentFromPlaceOut();

    let contentDiv = document.createElement("div");
    contentDiv.style.paddingTop = "20px";
    contentDiv.style.paddingBottom = "10px";
    contentDiv.style.maxHeight = "850px";
    contentDiv.style.overflowX = "auto";
    contentDiv.style.overflowY = "auto";

    let vk = document.createElement("h3");
    vk.textContent = "ІП-05 Кононенко Вадим";

    let vkMenuImg = document.createElement("img");
    vkMenuImg.src = lab4Info.vk.menu_task;
    vkMenuImg.style.width = "1000px";
    vkMenuImg.style.height = "500px";
    vkMenuImg.style.objectFit = "scale-down";

    let vkStylesMenuImg = document.createElement("img");
    vkStylesMenuImg.src = lab4Info.vk.styles_menu;
    vkStylesMenuImg.style.width = "1000px";
    vkStylesMenuImg.style.objectFit = "scale-down";

    let ar = document.createElement("h3");
    ar.textContent = "ІП-05 Рогозний Олексій";

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

    let kk = document.createElement("h3");
    kk.textContent = "ІП-05 Комісар Кіріл";

    let kkFormImg = document.createElement("img");
    kkFormImg.src = lab4Info.kk.form_task;
    kkFormImg.style.width = "1000px";
    kkFormImg.style.height = "380px";
    kkFormImg.style.objectFit = "scale-down";

    let kkCodeImg = document.createElement("img");
    kkCodeImg.src = lab4Info.kk.page_code;
    kkCodeImg.style.width = "1000px";
    kkCodeImg.style.objectFit = "scale-down";

    placeOut.appendChild(contentDiv);

    contentDiv.appendChild(vk);
    contentDiv.appendChild(vkMenuImg);
    contentDiv.appendChild(vkStylesMenuImg);

    contentDiv.appendChild(ar);
    contentDiv.appendChild(arTask2Img);
    contentDiv.appendChild(arPageCodeImg);
    contentDiv.appendChild(arJSCodeImg);

    contentDiv.appendChild(kk);
    contentDiv.appendChild(kkFormImg);
    contentDiv.appendChild(kkCodeImg);
}

export function showConclusion() {
    clearContentFromPlaceOut();

    let p = document.createElement("p");
    p.textContent = lab4Info.conclusion;
    p.style.fontSize = "20px";

    placeOut.appendChild(p);
}

function clearContentFromPlaceOut() {
    placeOut.textContent = "";
}