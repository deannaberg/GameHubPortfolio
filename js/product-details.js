const imageContainer = document.querySelector("#productImage");
const titleContainer = document.querySelector("#productTitle");
const priceContainer = document.querySelector("#price-box");
const detailsContainer = document.querySelector("#productDetails");
const sellerContainer = document.querySelector("#sellerDetails");



const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");
console.log(id);

const url = "https://deannaberg.no/wp-json/wc/v3/products/";
const key = "consumer_key=ck_3b732b2e31fabcccaf5d000c3f5a5c2111a20698";
const secret = "consumer_secret=cs_c26069423fb0f9be40d6d1d2ab7d47c7299e6e5e";

const product = `${url}${id}?${key}&${secret}`;

console.log(product);

async function getDetails() {
	try {
		const response = await fetch(product);
		const json = await response.json();
		
		console.log(json);

		const releaseDate = function(){
			if (!json.attributes.length){
			return "Release Date: unknown";
		}else{ return `${json.attributes[0].name} ${json.attributes[0].options}`;}
			
	}
	console.log(releaseDate());
	
		const seller = function(){
			if (!json.attributes.length){
			return "Seller: unknown";
		}else{ return `${json.attributes[1].name} ${json.attributes[1].options}`;}		
	}
	console.log(seller());

		const availability = function (){
			if (json.stock_status === "instock" ) {
				return "In stock"
			}else {return "out of stock"
		}}
		console.log(availability());

		imageContainer.innerHTML = ` 
									<img class="product-image-large" src="${json.images[0].src}" alt="${json.images[0].alt}"/>
									`
		titleContainer.innerHTML= `<h1>${json.name}</h1>
									<p>${releaseDate()}</p>
									<p>${seller()}</p>
									`

		priceContainer.innerHTML = `<p class="itemPrice">${json.price}kr</p>
								
									<p class = "availability">${availability()}</p>
									<div class="plus-minus">
										<i class="fas fa-minus"></i><span>1</span>
										<i class="fas fa-plus"></i>
									</div>
									<a class="button price-box-button" href="#">add to cart</a>
									`

		detailsContainer.innerHTML = `	
										<p>${json.short_description}</p>`
		console.log(detailsContainer.innerHTML);							
	} catch (error) {
		console.log("cannot display content");
		//resultDisplay.innerHTML = "Cannot display content";
	}
}

getDetails();
