"use strict";
const form = document.querySelector(".form");
const fullNameInput = document.getElementsByName("name")[0];
const emailInput = document.getElementsByName("email")[0];
const phoneInput = document.getElementsByName("phone")[0];

const fullNameRegex =
  /^[А-ЯІЇЄҐ'][а-яіїєґ']+\s[А-ЯІЇЄҐ'][а-яіїєґ']+\s[А-ЯІЇЄҐ'][а-яіїєґ']+\s*$/;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const phoneRegex = /^\+?[\d()-]{10,13}$/;

const nameValidationMessage =
  "Будь ласка, введіть ПІБ. Має бути 3 слова українською мовою і кожне з великої літери";

const emailValidationMessage =
  "Будь ласка, введіть коректний email. Має містити мінімум 5 символів, символ @ та крапку після @";

const phoneValidationMessage =
  "Будь ласка, введіть номер телефону. Має бути від 10 до 13 цифр, можна використовувати лише +, цифри, - і круглі дужки.";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = fullNameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

  const isValidFullName = fullNameRegex.test(fullName);
  const isValidEmail = emailRegex.test(email);
  const isValidPhone = phoneRegex.test(phone);

  if (isValidFullName && isValidEmail && isValidPhone) {
    fullNameInput.setCustomValidity("");
    emailInput.setCustomValidity("");
    phoneInput.setCustomValidity("");

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    form.reset();

    document.querySelector(".loader").classList.remove("loader--hidden");

    setTimeout(function () {
      document.querySelector(".loader").classList.add("loader--hidden");
      location.href = "myprofile.html";
    }, 2000);
  } else {
    if (!isValidFullName) {
      fullNameInput.setCustomValidity(nameValidationMessage);
      fullNameInput.value = "";
    } else if (!isValidEmail) {
      emailInput.setCustomValidity(emailValidationMessage);
      emailInput.value = "";
    } else if (!isValidPhone) {
      phoneInput.setCustomValidity(phoneValidationMessage);
      phoneInput.value = "";
    }
  }
});

function validateFullName() {
  const fullName = fullNameInput.value;
  if (!fullNameRegex.test(fullName)) {
    fullNameInput.setCustomValidity(nameValidationMessage);
  } else {
    fullNameInput.setCustomValidity("");
  }
}

function validateEmail() {
  const email = emailInput.value;
  if (!emailRegex.test(email)) {
    emailInput.setCustomValidity(emailValidationMessage);
  } else {
    emailInput.setCustomValidity("");
  }
}

function validatePhone() {
  const phone = phoneInput.value;
  if (!phoneRegex.test(phone)) {
    phoneInput.setCustomValidity(phoneValidationMessage);
  } else {
    phoneInput.setCustomValidity("");
  }
}

fullNameInput.addEventListener("input", validateFullName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
