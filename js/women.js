const url = "https://www.emmaht.one/wp-json/wc/v3/products?category=17&consumer_key=ck_5e77641893a6aa66990a850de7bd96c0ea77ece6&consumer_secret=cs_45a21709427b5c89f958f56188df6ac80fcc7b3b";

const apiContainer = document.querySelector(".api-container");

async function getJackets() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        // const facts = data.data;

        apiContainer.innerHTML = "";

        for (let i = 0; i < data.length; i++) {

            console.log(data[i].id)

            if (i === 9) {
                break;
            }
            apiContainer.innerHTML += `<a href="jacket-spesific.html?id=${data[i].id}" class="result">
                                        <div class="wrap">
                                            <div class="image" style="background-image: url('${data[i].images[0].src}')"></div>
                                            <h2>${data[i].name}</h2>
                                            <p>${data[i].price}kr</p>                                            
                                        </div>
                                        </a>`;
        }
    } catch (error) {
        console.log(error);
        console.log("An error occurred");
        apiContainer.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

getJackets();