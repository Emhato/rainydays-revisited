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