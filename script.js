const slides = [
 {
  image: "url(/image/project1.png)",
  title: "Landing page",
  text:
   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda laborum maiores consequuntur magni, inventore, animi consequatur quis quibusdam debitis nemo vitae maxime provident.",
  stack1: "",
  stack2: "",
  stack3: "",
 },
 { image: "url(/image/project2.png)", title: "WTube - база данных фильмов" },
];

let curSlide = 0;
let isTransition = false;

function showSlide(index) {
 if (isTransition) return;

 isTransition === true;
 const slide = slides[index];
 const slideElement = document.querySelector(".slide-js");
 const imageElement = document.querySelector(".slider-img-js");
 const titleElement = document.querySelector(".slider-title-js");
 

 slideElement.style.opacity = 0;
 setTimeout(() => {
  imageElement.style.backgroundImage = slide.image;
  titleElement.innerText = slide.title;
  slideElement.style.flexDirection = index % 2 === 0 ? "row" : "row-reverse";

  slideElement.style.opacity = 1;

  setTimeout(() => (isTransition = false), 500);
 }, 500);
}

function nextSlide() {
 curSlide = (curSlide + 1) % slides.length;
 showSlide(curSlide);
}
