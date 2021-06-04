// item in bag

// let theItem = localStorage.getItem("numberOfItems");

// if (getItem !== null) {
//     bag.innerHTML = `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag">(${getItem})</i></a></li>`;
// } else {
//     `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag"></i></a></li>`;
// }

// if(pluss) {
//     bag.textContent = storedInput
// }

// number.innerHTML = `<p> Number: ${getItem}</p>`
if (getItem > 0) {
    bag.innerHTML = `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag">(${getItem})</i></a></li>`;
}