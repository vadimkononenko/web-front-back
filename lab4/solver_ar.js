// Гістограма
const form = document.getElementById("inputForm");
const histogramContainer = document.getElementById("histogram");
const axisX = document.querySelector(".axis-x");
const axisY = document.querySelector(".axis-y");
let maxValueY = 10;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const valueInput = document.getElementById("value");
  const value = parseInt(valueInput.value);

  if (!isNaN(value)) {
    addBar(value);
    valueInput.value = "";
  }
});

function addBar(value) {
  const maxValueX = 10;

  const bar = document.createElement("div");
  bar.classList.add("histogram-bar");
  bar.style.height = `${(value / maxValueY) * 100}%`;
  bar.style.left = `${histogramContainer.childElementCount * 45}px`;
  histogramContainer.appendChild(bar);

  if (value > maxValueY) {
    maxValueY = value;
    updateAxisY();
  }
}

function updateAxisY() {
  axisY.innerHTML = "";

  for (let i = maxValueY; i >= 0; i--) {
    const span = document.createElement("span");
    span.innerText = i;
    axisY.appendChild(span);
  }
}

// Масив
// Функція для знаходження найбільшого від'ємного та найменшого додатного елементів масиву
function findMinMaxElements(array) {
  let maxNegative = Number.NEGATIVE_INFINITY;
  let minPositive = Number.POSITIVE_INFINITY;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0 && array[i] > maxNegative) {
      maxNegative = array[i];
    } else if (array[i] > 0 && array[i] < minPositive) {
      minPositive = array[i];
    }
  }

  return {
    maxNegative,
    minPositive,
  };
}

// Функція для сортування масиву у порядку зменшення методом вибору
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[maxIndex]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      // Обмін елементів
      let temp = array[i];
      array[i] = array[maxIndex];
      array[maxIndex] = temp;
    }
  }

  return array;
}

// Вхідний масив
const inputArray = [2, -2, 9, -11, 1, -5, 6, -3];

// Знаходжу найбільший від'ємний та найменший додатний елементи масиву
const minMaxElements = findMinMaxElements(inputArray);
const maxNegative = minMaxElements.maxNegative;
const minPositive = minMaxElements.minPositive;

// Виводжу вхідний масив на сторінку HTML
const inputTableBody = document.getElementById("inputTableBody");
for (let i = 0; i < inputArray.length; i++) {
  const row = document.createElement("tr");
  const indexCell = document.createElement("td");
  indexCell.textContent = i;
  const valueCell = document.createElement("td");
  valueCell.textContent = inputArray[i];
  row.appendChild(indexCell);
  row.appendChild(valueCell);
  inputTableBody.appendChild(row);
}

// Виводжу найбільший від'ємний та найменший додатний елементи на сторінку HTML
document.write("<h3>Найбільший від'ємний елемент: " + maxNegative + "</h3>");
document.write("<h3>Найменший додатній елемент: " + minPositive + "</h3>");

// Сортую масив у порядку зменшення
const sortedArray = selectionSort(inputArray);

// Виводжу вихідний масив на сторінку HTML
const outputTableBody = document.getElementById("outputTableBody");
for (let i = 0; i < sortedArray.length; i++) {
  const row = document.createElement("tr");
  const indexCell = document.createElement("td");
  indexCell.textContent = i;
  const valueCell = document.createElement("td");
  valueCell.textContent = sortedArray[i];
  row.appendChild(indexCell);
  row.appendChild(valueCell);
  outputTableBody.appendChild(row);
}
