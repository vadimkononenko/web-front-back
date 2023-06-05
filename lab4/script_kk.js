function validateForm() {
    var username = document.forms["registrationForm"]["username"].value;
    var password = document.forms["registrationForm"]["password"].value;
    var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
    var age = document.forms["registrationForm"]["age"].value;
    var height = document.forms["registrationForm"]["height"].value;
    var birthDate = document.forms["registrationForm"]["birthDate"].value;
  
    // Перевірка обов'язкових полів
    if (username === "" || password === "" || confirmPassword === "" || age === "" || birthDate === "") {
      alert("Будь ласка, заповніть усі обов'язкові поля.");
      return false;
    }
  
    // Перевірка введення паролів
    if (password !== confirmPassword) {
      alert("Паролі не співпадають.");
      return false;
    }
  
    // Перевірка цілого числа для віку
    if (!Number.isInteger(parseInt(age))) {
      alert("Введіть коректне ціле число для віку.");
      return false;
    }
  
    // Перевірка дати у форматі DD.MM.YYYY
    var dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!dateRegex.test(birthDate)) {
      alert("Введіть дату у форматі DD.MM.YYYY.");
      return false;
    }
  
    // Всі перевірки успішні, можна відправити форму
    return true;
  }
  