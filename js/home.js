const url = "https://www.emmaht.one/wp-json/wc/v3/products?category=18&consumer_key=ck_5e77641893a6aa66990a850de7bd96c0ea77ece6&consumer_secret=cs_45a21709427b5c89f958f56188df6ac80fcc7b3b";

const featured = document.querySelector(".featured-container");

async function getJackets() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        featured.innerHTML = "";

        for (let i = 0; i < data.length; i++) {


            if (i === 9) {
                break;
            }
            featured.innerHTML += `<div class="card">
                                        <a href="jacket-spesific.html?id=${data[i].id}" class="result">
                                            <div class="wrap">
                                                <div class="featured-image" style="background-image: url('${data[i].images[0].src}')"></div>
                                                <h3 class="name">${data[i].name}</h3>
                                                <button>View item</button>                                            
                                            </div>
                                        </a>
                                    </div>`;
        }
    } catch (error) {
        console.log(error);
        featured.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

getJackets();

const cta = document.querySelector(".cta")

cta.addEventListener("click", function() {

    window.scroll({
        top: 775,
        left: 100,
        behavior: 'smooth'
    });
})

// Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll
