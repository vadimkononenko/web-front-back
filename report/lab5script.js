export const lab5Info = {
    git_code_link: "https://github.com/vadimkononenko/web-front-back/tree/main/lab5",
    git_pages_link: "https://vadimkononenko.github.io/web-front-back/lab5",
    git_pages_link_gallery: "https://vadimkononenko.github.io/web-front-back/lab5/gallery.html",
    git_pages_link_video_gallery: "https://vadimkononenko.github.io/web-front-back/lab5/video_gallery.html",
    topic:
        "Тема: ВИКОРИСТАННЯ В СЦЕНАРІЯХ JAVASCRIPT БІБЛІОТЕК КРОС-БРАУЗЕРНИХ ІНТЕРФЕЙСІВ МЕТОДІВ DOM. БІБЛІОТЕКА JQUERY UI. ЗАСОБИ НАЛАГОДЖЕННЯ І ТЕСТУВАННЯ СЦЕНАРІЇВ JAVASCRIPT.",
    goal:
        "Мета: придбати практичні навички роботи jQuery UI, вміти додавати до сайту динамічні елементи цієї бібліотеки, плагін галереї UniteGallery, кнопки соціальних мереж, інформери та інше.",
    dynamic: "./assets/lab5/dynamic.png",
    dynamic_js: "./assets/lab5/dynamic_js.png",
    dynamic_html: "./assets/lab5/dynamic_html.png",
    socials: "./assets/lab5/socials.png",
    socials_styles: "./assets/lab5/socials_styles.png",
    socials_html: "./assets/lab5/socials_html.png",
    informer_forecast: "./assets/lab5/informer_forecast.png",
    informers_forecast_html: "./assets/lab5/informers_forecast_html.png",
    informer_clock: "./assets/lab5/informer_clock.png",
    informers_clock_html: "./assets/lab5/informers_clock_html.png",
    informers_clock_css: "./assets/lab5/informers_clock_css.png",
    informers_clock_js: "./assets/lab5/informers_clock_js.png",
    informer_currency: "./assets/lab5/informer_currency.png",
    informer_currency_js: "./assets/lab5/informer_currency_js.png",
    gallery_photo: "./assets/lab5/gallery_photo.png",
    gallery_html: "./assets/lab5/gallery_html.png",
    gallery_video: "./assets/lab5/gallery_video.png",
    gallery_video_html: "./assets/lab5/gallery_video_html.png",
    conclusion: "Висновки роботи: внаслідок виконання лабораторної роботи було удосконалено головну сторінку нашого проєкту та придбано практичні навички функціонального застосування JavaScript у HTML-документі, були придбані практичні навички роботи jQuery UI, ми навчились додавати до сайту динамічні елементи цієї бібліотеки, додали плагін галереї UniteGallery, кнопки соціальних мереж, інформери та інше.",
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
    topicDiv.addEventListener("click", showTopicAndGoalInfo);

    let dynamicElemsDiv = document.createElement("div");
    dynamicElemsDiv.classList.add("chapter");
    dynamicElemsDiv.innerHTML = "Динамічні елементи 3 пункту";
    dynamicElemsDiv.addEventListener("click", showDynamicElements);

    let unityGalleryDiv = document.createElement("div");
    unityGalleryDiv.classList.add("chapter");
    unityGalleryDiv.innerHTML = "UnityGallery";
    // urlSchemaDiv.addEventListener("click", showTagSelectors);

    let sliderPhotoDiv = document.createElement("div");
    sliderPhotoDiv.classList.add("inner-chapter");
    sliderPhotoDiv.innerHTML = "Слайдер фотографій";
    sliderPhotoDiv.addEventListener("click", showPhotoGallery);

    let sliderVideoDiv = document.createElement("div");
    sliderVideoDiv.classList.add("inner-chapter");
    sliderVideoDiv.innerHTML = "Слайдер відео";
    sliderVideoDiv.addEventListener("click", showGalleryVideo);

    let socialsDiv = document.createElement("div");
    socialsDiv.classList.add("chapter");
    socialsDiv.innerHTML = "Кнопки соціальних мереж";
    socialsDiv.addEventListener("click", showSocialsButtons);

    let informersDiv = document.createElement("div");
    informersDiv.classList.add("chapter");
    informersDiv.innerHTML = "Інформери";
    informersDiv.addEventListener("click", showInformers);

    let conclusionDiv = document.createElement("div");
    conclusionDiv.classList.add("chapter");
    conclusionDiv.innerHTML = "Висновки";
    conclusionDiv.addEventListener("click", showConclusion);

    labNavView.appendChild(topicDiv);
    labNavView.appendChild(dynamicElemsDiv);
    labNavView.appendChild(unityGalleryDiv);
    labNavView.appendChild(sliderPhotoDiv);
    labNavView.appendChild(sliderVideoDiv);
    labNavView.appendChild(socialsDiv);
    labNavView.appendChild(informersDiv);
    labNavView.appendChild(conclusionDiv);

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

function showDynamicElements() {
    clearContentFromPlaceOut();

    let contentDiv = document.createElement("div");
    contentDiv.style.paddingTop = "20px";
    contentDiv.style.paddingBottom = "10px";
    contentDiv.style.maxHeight = "850px";
    contentDiv.style.overflowX = "auto";
    contentDiv.style.overflowY = "auto";

    let dynamicImg = document.createElement("img");
    dynamicImg.src = lab5Info.dynamic;
    dynamicImg.style.width = "1000px";
    dynamicImg.style.height = "200px";
    dynamicImg.style.objectFit = "scale-down"

    let dynamicJSImg = document.createElement("img");
    dynamicJSImg.src = lab5Info.dynamic_js;
    dynamicJSImg.style.width = "1000px";
    dynamicJSImg.style.objectFit = "scale-down"

    let dynamicHTMLImg = document.createElement("img");
    dynamicHTMLImg.src = lab5Info.dynamic_html;
    dynamicHTMLImg.style.width = "1000px";
    dynamicHTMLImg.style.objectFit = "scale-down"

    placeOut.appendChild(contentDiv);

    contentDiv.appendChild(dynamicImg);
    contentDiv.appendChild(dynamicJSImg);
    contentDiv.appendChild(dynamicHTMLImg);
}

function showSocialsButtons() {
    clearContentFromPlaceOut();

    let contentDiv = document.createElement("div");
    contentDiv.style.paddingTop = "20px";
    contentDiv.style.paddingBottom = "10px";
    contentDiv.style.maxHeight = "850px";
    contentDiv.style.overflowX = "auto";
    contentDiv.style.overflowY = "auto";

    let socialsImg = document.createElement("img");
    socialsImg.src = lab5Info.socials;
    socialsImg.style.width = "1000px";
    socialsImg.style.height = "300px";
    socialsImg.style.objectFit = "scale-down"

    let socialsStylesImg = document.createElement("img");
    socialsStylesImg.src = lab5Info.socials_styles;
    socialsStylesImg.style.width = "1000px";
    socialsStylesImg.style.objectFit = "scale-down"

    let socialsHTMLImg = document.createElement("img");
    socialsHTMLImg.src = lab5Info.socials_html;
    socialsHTMLImg.style.width = "1000px";
    socialsHTMLImg.style.objectFit = "scale-down"

    placeOut.appendChild(contentDiv);

    contentDiv.appendChild(socialsImg);
    contentDiv.appendChild(socialsStylesImg);
    contentDiv.appendChild(socialsHTMLImg);
}

function showInformers() {
    clearContentFromPlaceOut();

    let contentDiv = document.createElement("div");
    contentDiv.style.paddingTop = "20px";
    contentDiv.style.paddingBottom = "10px";
    contentDiv.style.maxHeight = "850px";
    contentDiv.style.overflowX = "auto";
    contentDiv.style.overflowY = "auto";

    let informersForecastImg = document.createElement("img");
    informersForecastImg.src = lab5Info.informer_forecast;
    informersForecastImg.style.width = "1000px";
    informersForecastImg.style.marginTop = "-300px";
    informersForecastImg.style.objectFit = "scale-down"

    let informersClockImg = document.createElement("img");
    informersClockImg.src = lab5Info.informer_clock;
    informersClockImg.style.width = "1000px";
    informersClockImg.style.objectFit = "scale-down"

    let informersCurrencyImg = document.createElement("img");
    informersCurrencyImg.src = lab5Info.informer_currency;
    informersCurrencyImg.style.width = "1000px";
    informersCurrencyImg.style.objectFit = "scale-down"

    let informersForecastHtmlImg = document.createElement("img");
    informersForecastHtmlImg.src = lab5Info.informers_forecast_html;
    informersForecastHtmlImg.style.width = "1000px";
    informersForecastHtmlImg.style.objectFit = "scale-down"

    let informersClockHtmlImg = document.createElement("img");
    informersClockHtmlImg.src = lab5Info.informers_clock_html;
    informersClockHtmlImg.style.width = "1000px";
    informersClockHtmlImg.style.objectFit = "scale-down"

    let informersCurrencyJsImg = document.createElement("img");
    informersCurrencyJsImg.src = lab5Info.informer_currency_js;
    informersCurrencyJsImg.style.width = "1000px";
    informersCurrencyJsImg.style.objectFit = "scale-down"

    let informersClockCssImg = document.createElement("img");
    informersClockCssImg.src = lab5Info.informers_clock_css;
    informersClockCssImg.style.width = "1000px";
    informersClockCssImg.style.objectFit = "scale-down"

    let informersClockJsImg = document.createElement("img");
    informersClockJsImg.src = lab5Info.informers_clock_js;
    informersClockJsImg.style.width = "1000px";
    informersClockJsImg.style.objectFit = "scale-down"

    placeOut.appendChild(contentDiv);

    contentDiv.appendChild(informersForecastImg);
    contentDiv.appendChild(informersForecastHtmlImg);

    contentDiv.appendChild(informersClockImg);
    contentDiv.appendChild(informersClockHtmlImg);
    contentDiv.appendChild(informersClockCssImg);
    contentDiv.appendChild(informersClockJsImg);

    contentDiv.appendChild(informersCurrencyImg);
    contentDiv.appendChild(informersCurrencyJsImg);

}
function showPhotoGallery() {
    clearContentFromPlaceOut();

    let contentDiv = document.createElement("div");
    contentDiv.style.paddingTop = "20px";
    contentDiv.style.paddingBottom = "10px";
    contentDiv.style.maxHeight = "850px";
    contentDiv.style.overflowX = "auto";
    contentDiv.style.overflowY = "auto";

    let galleryPhotoImg = document.createElement("img");
    galleryPhotoImg.src = lab5Info.gallery_photo;
    galleryPhotoImg.style.width = "1000px";
    galleryPhotoImg.style.objectFit = "scale-down"

    let galleryPhotoHTMLImg = document.createElement("img");
    galleryPhotoHTMLImg.src = lab5Info.gallery_html;
    galleryPhotoHTMLImg.style.width = "1000px";
    galleryPhotoHTMLImg.style.objectFit = "scale-down"

    placeOut.appendChild(contentDiv);

    contentDiv.appendChild(galleryPhotoImg);
    contentDiv.appendChild(galleryPhotoHTMLImg);
}

function showGalleryVideo() {
    clearContentFromPlaceOut();

    let contentDiv = document.createElement("div");
    contentDiv.style.paddingTop = "20px";
    contentDiv.style.paddingBottom = "10px";
    contentDiv.style.maxHeight = "850px";
    contentDiv.style.overflowX = "auto";
    contentDiv.style.overflowY = "auto";

    let galleryVideoImg = document.createElement("img");
    galleryVideoImg.src = lab5Info.gallery_video;
    galleryVideoImg.style.width = "1000px";
    galleryVideoImg.style.objectFit = "scale-down"

    let galleryVideoHTMLImg = document.createElement("img");
    galleryVideoHTMLImg.src = lab5Info.gallery_video_html;
    galleryVideoHTMLImg.style.width = "1000px";
    galleryVideoHTMLImg.style.objectFit = "scale-down"

    placeOut.appendChild(contentDiv);

    contentDiv.appendChild(galleryVideoImg);
    contentDiv.appendChild(galleryVideoHTMLImg);
}

export function showConclusion() {
    clearContentFromPlaceOut();

    let p = document.createElement("p");
    p.textContent = lab5Info.conclusion;
    p.style.fontSize = "20px";

    placeOut.appendChild(p);
}

function clearContentFromPlaceOut() {
    placeOut.textContent = "";
}