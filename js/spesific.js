const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const idParam = params.get("id");

const url = "https://www.emmaht.one/wp-json/wc/v3/products/" + idParam + "?consumer_key=ck_5e77641893a6aa66990a850de7bd96c0ea77ece6&consumer_secret=cs_45a21709427b5c89f958f56188df6ac80fcc7b3b";


const apiContainer = document.querySelector(".api-container");
const title = document.querySelector("title");


async function getDetails() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        apiContainer.innerHTML = "";

            title.innerHTML = `${data.name}`;

            apiContainer.innerHTML = `<div class="results">
                                    <h1>${data.name}</h1>
                                    <div class="details-image"
                                        style="background-image: url('${data.images[0].src}')"></div>
                                    </div>`;


    } catch (error) {
        console.log(error);
        apiContainer.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

getDetails()

const checkoutButton = document.querySelector(".choice");

addItem.addEventListener("click", function() {
    checkoutButton.style.display = "block";
})