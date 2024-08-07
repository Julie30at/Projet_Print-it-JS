//selection des éléments du DOM
const arrowLeft = document.getElementById("slide_left");
const arrowRight = document.getElementById("slide_right");
const bannerImg = document.querySelector(".banner-img");
const bannerTagline = document.getElementById("tagLine");
const dots = document.querySelectorAll(".dot, .dot_selected");

//tableau des données du diapositive
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

//variable de la bannière initiale
let currentBannerIndex = 0;

//fonction d'affichage bannière
function showBanner(index) {
	bannerImg.src = slides[index].image;
	bannerTagline.innerHTML = slides[index].tagLine;
	dots.forEach((dot, i) => {
		dot.classList.toggle("dot_selected", i === index);
	});
}

//initialisation de la première bannière
showBanner(currentBannerIndex);

//gestion de lévènement pour flèche droite
arrowRight.addEventListener("click", function(){
	console.log("click right");
	if (currentBannerIndex === 3) {
        currentBannerIndex = 0;
    } else {
        currentBannerIndex++;
    }
	showBanner(currentBannerIndex);
});

//gestion de l'évènement pour flèche gauche
arrowLeft.addEventListener("click", function(){
	console.log("click left");
	if (currentBannerIndex === 0) {
    currentBannerIndex = 3;
    } else {
    currentBannerIndex--;
    }
    showBanner(currentBannerIndex);
});
