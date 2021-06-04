const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError")
const button = document.querySelector("button");
const confirmMessage = document.querySelector(".confirmMessage");
const formError = document.querySelector(".form-error")

function formValidation(event) {
    event.preventDefault();

    if (lengthCheck(fullName.value, 4)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (lengthCheck(phone.value, 7)) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block";
    }

    if (lengthCheck(message.value, 9)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (emailValidation(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}

form.addEventListener("submit", formValidation);

function emailValidation(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function lengthCheck(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}
