// Запитуємо кількість елементів в масиві від користувача
let length = parseInt(prompt("Введіть кількість елементів масиву:"));

// Створюємо порожній масив
let arr = fillArrayWithRandomValues(length, 0, 20);

let evenSum = 0;
let maxElement = 0;
let maxIndex = 0;
let minElement = 0;
let minIndex = 0;

calcSumOfEvenElements();
findMaxElementByOddIndex();
findMinElementByOddIndex();

setupView();

function setupView() {
    let originalArraySpan = document.getElementById("original-array");
    originalArraySpan.textContent = arr.join(", ");

    let evenSumSpan = document.getElementById("even-sum");
    evenSumSpan.textContent = evenSum;

    let maxElemSpan = document.getElementById("max-elem");
    maxElemSpan.textContent = maxElement;

    let maxIndexSpan = document.getElementById("max-index");
    maxIndexSpan.textContent = maxIndex;

    let minElemSpan = document.getElementById("min-elem");
    minElemSpan.innerText = minElement;

    let minIndexSpan = document.getElementById("min-index");
    minIndexSpan.textContent = minIndex;

    let origArraySpan = document.getElementById("orig-array");
    origArraySpan.textContent = arr.join(", ");

    sortArray();
    let sortedArraySpan = document.getElementById("sorted-array");
    sortedArraySpan.textContent = arr.join(", ");
}

function fillArrayWithRandomValues(length, minValue, maxValue) {
    let arrForFill = [];
    for (let i = 0; i < length; i++) {
        let randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        arrForFill.push(randomValue);
    }
    return arrForFill;
}

// Знаходимо суму елементів з парними індексами
function calcSumOfEvenElements() {
    for (let i = 0; i < length; i += 2) {
        evenSum += arr[i];
    }
}

// Знаходимо максимальний елемент та його індекс серед елементів з непарними індексами
function findMaxElementByOddIndex() {
    maxElement = arr[1];
    maxIndex = 1;
    for (let i = 3; i < length; i += 2) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
            maxIndex = i;
        }
    }
}

// Знаходимо мінімальний елемент та його індекс серед елементів з непарними індексами
function findMinElementByOddIndex() {
    minElement = arr[1];
    minIndex = 1;
    for (let i = 3; i < length; i += 2) {
        if (arr[i] < minElement) {
            minElement = arr[i];
            minIndex = i;
        }
    }
}

// Сортуємо масив у порядку зростання
function sortArray() {
    arr.sort(function (a, b) {
        return a - b;
    });
}