const addItem = document.querySelector(".new-button");
const bag = document.querySelector(".bag");

let items = 0;
let getItem = localStorage.getItem("numberOfItems");

addItem.addEventListener("click", function() {
    items += 1;
    localStorage.setItem('numberOfItems',items);
    let getItem = localStorage.getItem("numberOfItems");
    bag.innerHTML = `<li><a class="bag" href="checkout.html"><i class="fas fa-shopping-bag">(${getItem})</i></a></li>`;
});
