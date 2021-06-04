const form = document.querySelector("#form");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");

const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zipError")

const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");

const cardnumber = document.querySelector("#cardnumber");
const cardnumberError = document.querySelector("#cardnumberError");

const securityCode = document.querySelector("#securityCode")
const securityCodeError = document.querySelector("#securityCodeError")

const button = document.querySelector(".pay");

function formValidation(event) {
    event.preventDefault();

    if (lengthCheck(firstName.value, 1)) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (lengthCheck(lastName.value, 1)) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (emailValidation(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (lengthCheck(address.value, 3)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (lengthCheck(city.value, 1)) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "block";
    }

    if (lengthCheck(zip.value, 3)) {
        zipError.style.display = "none";
    } else {
        zipError.style.display = "block";
    }

    if (lengthCheck(phone.value, 7)) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block";
    }

    if (lengthCheck(cardnumber.value, 15)) {
        cardnumberError.style.display = "none";
    } else {
        cardnumberError.style.display = "block";
    }

    if (securityCode.value.trim().length > 2 && securityCode.value.trim().length < 4) {
        securityCodeError.style.display = "none";
    } else {
        securityCodeError.style.display = "block";
    }

    console.log("hello");
}

form.addEventListener("submit", formValidation);

function linkToButton() {
    if (lengthCheck(firstName.value, 1) && lengthCheck(lastName.value, 1) && emailValidation(email.value) && lengthCheck(address.value, 3) && lengthCheck(city.value, 1) && lengthCheck(zip.value, 3) && lengthCheck(phone.value, 7) && lengthCheck(cardnumber.value, 15) && (securityCode.value.trim().length > 2 && securityCode.value.trim().length < 4)) {
        button.innerHTML = `<a class="button" href="checkout-success.html">Pay and place order</a>`;
    } else {
        button.innerHTML = `<button>Pay and place order</button>`;
    }
}

// CHANGE removed the <button> so there wasen't an extra button

// button.addEventListener("click", function() {
//     button.innerHTML += `<a href="checkout-success.html"></a>`
// })

form.addEventListener("submit", linkToButton);

// function linkToButton

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

// item in bag



// let getItem = localStorage.getItem("numberOfItems");



// if (getItem !== null) {
//     bag.innerHTML = `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag">(${getItem})</i></a></li>`;
// } else {
//     `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag"></i></a></li>`;
// }
// quantity.innerHTML += `${getItem}`;
// prize.innerHTML += `${getItem * 1999}kr`;


// change quantity

// const add = document.querySelector(".add");
// const remove = document.querySelector(".remove");

// remove.addEventListener("click", function() {
//     if (getItem > 0) {
//         bag.innerHTML = `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag">(${getItem -= 1})</i></a></li>`;
//     }
// });