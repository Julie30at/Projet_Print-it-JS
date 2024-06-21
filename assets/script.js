
const arrowLeft = document.querySelector("#banner .arrow_left");
const arrowRight = document.querySelector("#banner .arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerTagline = document.querySelector("p");
const dots = document.querySelectorAll(".dot, .dot_selected");

const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let currentBannerIndex = 0;

function showBanner(index) {
	bannerImg.src = slides[index].image;
	bannerTagline.innerHTML = slides[index].tagLine;
	dots.forEach((dot, i) => {
		dot.classList.toggle("dot_selected", i === index);
	});
}

showBanner(currentBannerIndex);

arrowRight.addEventListener("click", function(){
	console.log("click right");
	if (currentBannerIndex + 1 >= slides.length) {
        currentBannerIndex = 0;
    } else {
        currentBannerIndex++;
    }
	showBanner(currentBannerIndex);
});

arrowLeft.addEventListener("click", function(){
	console.log("click left");
	if (currentBannerIndex - 1 < 0) {
    currentBannerIndex = slides.length - 1;
    } else {
    currentBannerIndex--;
    }
    showBanner(currentBannerIndex);
});



