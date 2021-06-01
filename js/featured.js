const url = "https://deannaberg.no/wp-json/wc/v3/products";
const key = "consumer_key=ck_3b732b2e31fabcccaf5d000c3f5a5c2111a20698";
const secret = "consumer_secret=cs_c26069423fb0f9be40d6d1d2ab7d47c7299e6e5e";

const wooApi = `${url}?${key}&${secret}`;

const featuredProducts = document.querySelector("#featuredGames");


async function getContent() {
	try {
		const response = await fetch(wooApi);
		const gameResults = await response.json();

		console.log(gameResults);

		for (let i = 0; i < gameResults.length; i++){
			if (gameResults[i].featured != true) {
				continue;
			}
			
			const name = gameResults[i].name;
			const img = gameResults[i].images[0].src;
			const price = gameResults[i].price;
			let id = gameResults[i].id;
			console.log(name, img, price);
		
			
			featuredProducts.innerHTML += `<figure class="smGameBox">
											<a href="game/product.html?id=${id}"><img class="featuredImg"src="${img}"/></a>
												<figcaption>
												<a href="game/product.html?id=${id}"><p>${name}</p></a>
											</figcaption>
											</figure>`;
		}
		
	} catch (error) {
		console.log("Cannot display content");
		//errorDisplay.innerHTML = "Cannot display content";
	}
}
getContent();