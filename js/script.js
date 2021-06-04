// const addToBag = document.querySelector(".addToBag");
// const bag = document.querySelector(".bag");
// const orderSummary = document.querySelector(".summary");
// const quantity = document.querySelector(".quantity");
// const prize = document.querySelector(".pri");
// const proceed = document.querySelector(".choice");
// const add = document.querySelector(".add");
// const subtract = document.querySelector(".subtract")

// let items = 0;



// addToBag.addEventListener("click", function() {
//     items += 1;
//     localStorage.setItem('numberOfItems',items);
//     let getItem = localStorage.getItem("numberOfItems");
//     if (getItem !== null) {
//         bag.innerHTML = `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag">(${getItem})</i></a></li>`;
//     } else {
//         `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag"></i></a></li>`;
//     }
//     quantity.innerHTML += `${getItem}`;
//     proceed.style.display = "block";
// });

// add.addEventListener("click", function() {
//     items += 1;
//     localStorage.setItem('numberOfItems',items);
//     let getItem = localStorage.getItem("numberOfItems");
//     if (getItem !== null) {
//         bag.innerHTML = `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag">(${getItem})</i></a></li>`;
//     } else {
//         `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag"></i></a></li>`;
//     }
//     quantity.innerHTML += `${getItem}`;
//     proceed.style.display = "block";
// });

// subtract.addEventListener("click", function() {
//     items -= 1;
//     localStorage.setItem('numberOfItems',items);
//     let getItem = localStorage.getItem("numberOfItems");
//     if (getItem !== null) {
//         bag.innerHTML = `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag">(${getItem})</i></a></li>`;
//     } else {
//         `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag"></i></a></li>`;
//     }
//     quantity.innerHTML += `${getItem}`;
//     proceed.style.display = "block";
// });










// const pluss = document.querySelector(".pluss");
// const minus = document.querySelector(".minus");
// const bag = document.querySelector(".bag");
// const getItem = localStorage.getItem('itemNumber');

// console.log(getItem)

// // if(pluss) {
// //     bag.textContent = storedInput
// // }

// let item = 0;

// function add() {
//     item += 1;
//     localStorage.setItem('itemNumber', item)
//     if (item > 0) {
//         bag.innerHTML = `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag">(${item})</i></a></li>`;
//     }
//     else {
//         `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag"></i></a></li>`
//     }
// }

// function subtract() {
//     item -= 1
//     localStorage.setItem('itemNumber', item)
//     if (item >= 0) {
//         bag.innerHTML = `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag">(${item})</i></a></li>`;
//     }
//     else {
//         `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag"></i></a></li>`
//     }
// }

// pluss.addEventListener("click", add);

// minus.addEventListener("click", subtract);




const addItem = document.querySelector(".new-button");
const bag = document.querySelector(".bag");
// const number = document.querySelector(".number");

let items = 0;
let getItem = localStorage.getItem("numberOfItems");

addItem.addEventListener("click", function() {
    items += 1;
    localStorage.setItem('numberOfItems',items);
    let getItem = localStorage.getItem("numberOfItems");
    bag.innerHTML = `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag">(${getItem})</i></a></li>`;
});

// if (getItem > 0) {}
// bag.innerHTML = `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag">(${getItem})</i></a></li>`;