// Запитуємо кількість елементів в масиві від користувача
let length = parseInt(prompt("Введіть кількість елементів масиву:"));

// Створюємо порожній масив
let arr = fillArrayWithRandomValues(length, 0, 20);

let evenSum = 0;
let maxElement ;
let maxIndex;
let minElement;
let minIndex;

calcSumOfEvenElements();
findMaxElementByOddIndex();
findMinElementByOddIndex();

// Виводимо результати
console.log("1.\n");
console.log("Масив:", arr);
console.log("Сума елементів з парними індексами:", evenSum);
console.log("Максимальний елемент:", maxElement);
console.log("Його індекс:", maxIndex);
console.log("Мінімальний елемент:", minElement);
console.log("Його індекс:", minIndex);

// Виводимо відсортований масив
console.log("\n2.\n");
console.log("Початковий масив:", arr);
sortArray();
console.log("Відсортований масив:", arr);

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