const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const idParam = params.get("id");

console.log(idParam);


const url = "https://www.emmaht.one/wp-json/wc/v3/products/" + idParam + "?consumer_key=ck_5e77641893a6aa66990a850de7bd96c0ea77ece6&consumer_secret=cs_45a21709427b5c89f958f56188df6ac80fcc7b3b";

console.log(url)

const apiContainer = document.querySelector(".api-container");
const title = document.querySelector("title");


async function getDetails() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        console.log(data.name)

        apiContainer.innerHTML = "";

            title.innerHTML = `${data.name}`;

            apiContainer.innerHTML = `<div class="results">
                                    <h1>${data.name}</h1>
                                    <div class="details-image"
                                        style="background-image: url('${data.images[0].src}')"></div>
                                    </div>
                                    <button class="addToBag pluss" data-product="${data.id}">Add to bag</button>`;


    } catch (error) {
        console.log(error);
        console.log("An error occurred");
        apiContainer.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

getDetails()