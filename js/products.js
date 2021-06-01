const url = "https://deannaberg.no/wp-json/wc/v3/products";
const key = "consumer_key=ck_3b732b2e31fabcccaf5d000c3f5a5c2111a20698";
const secret = "consumer_secret=cs_c26069423fb0f9be40d6d1d2ab7d47c7299e6e5e";

const wooApi = `${url}?${key}&${secret}`;

const resultDisplay = document.querySelector("#productListing");
const featuredProducts = document.querySelector("#featuredGames");


async function getContent() {
	try {
		const response = await fetch(wooApi);
		const gameResults = await response.json();

		console.log(gameResults);

		for (let i = 0; i < gameResults.length; i++){
			
			let name = gameResults[i].name;
			let img = gameResults[i].images[0].src;
			let price = gameResults[i].price;
			let id = gameResults[i].id;
			console.log(name, img, price, id);
		

			resultDisplay.innerHTML += `
										<div class="productCard">
										<a href="product.html?id=${id}">
										<img class ="productImg" src="${img}"/>
										</a>
										<a href="product.html?id=${id}"><h2>${name}</h2></a>
										<h3>${price}kr</h3>
										<a class="productCardButton" href="#">add to cart</a>
										</div>`;
			
		}
		
	} catch (error) {
		console.log("Cannot display content");
		//errorDisplay.innerHTML = "Cannot display content";
	}
}
getContent();
