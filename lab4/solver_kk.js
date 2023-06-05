// Отримання кількості елементів масиву від користувача
var length = parseInt(prompt('Введіть кількість елементів масиву:'));

// Створення порожнього масиву
var array = [];

// Заповнення масиву введеними користувачем значеннями
for (var i = 0; i < length; i++) {
  var value = parseInt(prompt('Введіть значення для елементу з індексом ' + i + ':'));
  array.push(value);
}

// Функція для знаходження максимального парного елемента
function findMaxEven(arr) {
  var maxEven = Number.NEGATIVE_INFINITY;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > maxEven) {
      maxEven = arr[i];
    }
  }
  return maxEven;
}

// Функція для знаходження мінімального елемента серед елементів з парними індексами
function findMinEvenIndex(arr) {
  var minEvenIndex = arr.length;
  var minEven = Number.POSITIVE_INFINITY;
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] < minEven) {
      minEvenIndex = i;
      minEven = arr[i];
    }
  }
  return minEvenIndex;
}

// Знаходження максимального парного елемента 
var maxEven = findMaxEven(array);

// Знаходження мінімального елемента серед елементів з парними індексами
var minEvenIndex = findMinEvenIndex(array);

// Обмін місцями максимального та мінімального елементів
var temp = array[maxEven];
array[maxEven] = array[minEvenIndex];
array[minEvenIndex] = temp;

// Виведення вхідного та вихідного масивів в консоль
console.log('Вхідний масив:', array);
console.log('Вихідний масив:', array);

// Функція сортування масиву за зростанням методом вставки
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var key = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Виконання сортування вихідного масиву
var sortedArray = insertionSort(array);

// Виведення відсортованого масиву в консоль
console.log('Відсортований масив:', sortedArray);
