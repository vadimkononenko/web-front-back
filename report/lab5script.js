export const lab5Info = {
    git_code_link: "https://github.com/vadimkononenko/web-front-back/tree/main/lab5",
    git_pages_link: "https://vadimkononenko.github.io/web-front-back/lab5",
    git_pages_link_gallery: "https://vadimkononenko.github.io/web-front-back/lab5/gallery.html",
    git_pages_link_video_gallery: "https://vadimkononenko.github.io/web-front-back/lab5/video_gallery.html",
    topic:
        "Тема: ВИКОРИСТАННЯ В СЦЕНАРІЯХ JAVASCRIPT БІБЛІОТЕК КРОС-БРАУЗЕРНИХ ІНТЕРФЕЙСІВ МЕТОДІВ DOM. БІБЛІОТЕКА JQUERY UI. ЗАСОБИ НАЛАГОДЖЕННЯ І ТЕСТУВАННЯ СЦЕНАРІЇВ JAVASCRIPT.",
    goal:
        "Мета: придбати практичні навички роботи jQuery UI, вміти додавати до сайту динамічні елементи цієї бібліотеки, плагін галереї UniteGallery, кнопки соціальних мереж, інформери та інше.",
    conclusion:
        "Висновки роботи: виконуючи лабораторну роботу 2 ми навчилися працювати з селекторами, списками, ідентифікаторами, відступами, плаваючими елементами, та покращили навички оформлення текстових елементів",
};

const placeOut = document.getElementById("place-out");

export function setupFifthLabView() {
    let labNavView = document.getElementById("lab-nav-view");

    // очищуємо div від дочірніх елементів, щоб не було дублювання
    while (labNavView.firstChild) {
        labNavView.removeChild(labNavView.firstChild);
    }

    let topicDiv = document.createElement("div");
    topicDiv.classList.add("chapter");
    topicDiv.innerHTML = "Тема, мета, ЛР №5 Місце розташування сайту, звіту";
    // topicDiv.addEventListener("click", showTopicAndGoalInfo);

    let dynamicElemsDiv = document.createElement("div");
    dynamicElemsDiv.classList.add("chapter");
    dynamicElemsDiv.innerHTML = "Динамічні елементи 3 пункту";
    // styleMethodsDiv.addEventListener("click", showStyleMethods);

    let unityGalleryDiv = document.createElement("div");
    unityGalleryDiv.classList.add("chapter");
    unityGalleryDiv.innerHTML = "UnityGallery";
    // urlSchemaDiv.addEventListener("click", showTagSelectors);

    let photoGalleryDiv = document.createElement("div");
    photoGalleryDiv.classList.add("inner-chapter");
    photoGalleryDiv.innerHTML = "Фотогалерея";
    // eventDiv.addEventListener("click", showClassSelectors);

    let sliderPhotoDiv = document.createElement("div");
    sliderPhotoDiv.classList.add("inner-chapter");
    sliderPhotoDiv.innerHTML = "Слайдер фотографій";
    // idSelectorsDiv.addEventListener("click", showIdSelectors);

    let sliderVideoDiv = document.createElement("div");
    sliderVideoDiv.classList.add("inner-chapter");
    sliderVideoDiv.innerHTML = "Слайдер відео";
    // otherSelectorsDiv.addEventListener("click", showOtherSelectors);

    let socialsDiv = document.createElement("div");
    socialsDiv.classList.add("chapter");
    socialsDiv.innerHTML = "Кнопки соціальних мереж";
    // arraysDiv.addEventListener("click", showCssInfo);

    let informersDiv = document.createElement("div");
    informersDiv.classList.add("chapter");
    informersDiv.innerHTML = "Інформери";
    // conclusionDiv.addEventListener("click", showConclusion);

    labNavView.appendChild(topicDiv);
    labNavView.appendChild(dynamicElemsDiv);
    labNavView.appendChild(unityGalleryDiv);
    labNavView.appendChild(photoGalleryDiv);
    labNavView.appendChild(sliderPhotoDiv);
    labNavView.appendChild(sliderVideoDiv);
    labNavView.appendChild(socialsDiv);
    labNavView.appendChild(informersDiv);

    showTopicAndGoalInfo();
}

export function showTopicAndGoalInfo() {
    clearContentFromPlaceOut();

    let gitCodeLink = document.createElement("a");
    gitCodeLink.innerHTML = "[code] Посилання на Github";
    gitCodeLink.href = lab5Info.git_code_link;
    gitCodeLink.classList.add("git-link-appearance");

    let gitPagesLink = document.createElement("a");
    gitPagesLink.innerHTML = "[pages] Посилання на Github";
    gitPagesLink.href = lab5Info.git_pages_link;
    gitPagesLink.classList.add("git-link-appearance");

    let gitPagesLinkGallery = document.createElement("a");
    gitPagesLinkGallery.innerHTML = "[pages gallery] Посилання на Github";
    gitPagesLinkGallery.href = lab5Info.git_pages_link_gallery;
    gitPagesLinkGallery.classList.add("git-link-appearance");

    let gitPagesLinkVideoGallery = document.createElement("a");
    gitPagesLinkVideoGallery.innerHTML = "[pages video gallery] Посилання на Github";
    gitPagesLinkVideoGallery.href = lab5Info.git_pages_link_video_gallery;
    gitPagesLinkVideoGallery.classList.add("git-link-appearance");

    let brEl1 = document.createElement("br");
    let brEl2 = document.createElement("br");
    let brEl3 = document.createElement("br");
    let brEl4 = document.createElement("br");
    let brEl5 = document.createElement("br");

    let topic = document.createElement("p");
    topic.textContent = lab5Info.topic;

    let goal = document.createElement("p");
    goal.textContent = lab5Info.goal;

    placeOut.appendChild(topic);
    placeOut.appendChild(brEl1);
    placeOut.appendChild(goal);
    placeOut.appendChild(brEl2);
    placeOut.appendChild(gitCodeLink);
    placeOut.appendChild(brEl3);
    placeOut.appendChild(gitPagesLink);
    placeOut.appendChild(brEl4);
    placeOut.appendChild(gitPagesLinkGallery);
    placeOut.appendChild(brEl5);
    placeOut.appendChild(gitPagesLinkVideoGallery);
}

function clearContentFromPlaceOut() {
    placeOut.textContent = "";
}