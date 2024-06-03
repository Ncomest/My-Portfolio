const slides = [
 {
  web: "https://ncomest.github.io/Landing-market/",
  image: "url(/image/project1.png)",
  title: "Landing page",
  text:
   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda laborum maiores consequuntur magni, inventore, animi consequatur quis quibusdam debitis nemo vitae maxime provident.",
  icons: [
   "https://img.icons8.com/?size=100&id=cHBUT9SmrD2V&format=png&color=d4d4d4",
   "https://img.icons8.com/?size=100&id=viH7JJy51bHj&format=png&color=d4d4d4",
  ],
 },
 {
  web: "https://wtube.vercel.app",
  image: "url(/image/project2.png)",
  title: "WTube - база данных фильмов",
  text:
   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda laborum maiores consequuntur magni, inventore, animi consequatur quis quibusdam debitis nemo vitae maxime provident.",
  icons: [
   "https://img.icons8.com/?size=100&id=A6r5yddU9uA0&format=png&color=d4d4d4",
   "https://img.icons8.com/?size=100&id=23028&format=png&color=d4d4d4",
  ],
 },
];

let curSlide = 0;
let isTransition = false;

function showSlide(index) {
 if (isTransition) return;

 isTransition = true;
 const slide = slides[index];
 const slideElement = document.querySelector(".slide-js");
 const imageElement = document.querySelector(".slider-img-js");
 const titleElement = document.querySelector(".slider-title-js");
 const iconsList = document.querySelector(".stack-box-js");
 const btnMore = document.querySelector(".button-more-js");

 //  slideElement.style.opacity = 0;
 setTimeout(() => {
  imageElement.style.backgroundImage = slide.image;
  titleElement.innerText = slide.title;
  slideElement.style.flexDirection = index % 2 === 0 ? "row" : "row-reverse";

  iconsList.innerHTML = "";
  slide.icons.forEach((icon) => {
   const li = document.createElement("li");
   const img = document.createElement("img");

   img.src = icon;
   li.appendChild(img);
   iconsList.appendChild(li);
  });

  btnMore.onclick = () => {
   window.open(slide.web, "_blank");
  };
  // slideElement.style.opacity = 1;

  setTimeout(() => (isTransition = false), 500);
 }, 0);
}

function nextSlide() {
 curSlide = (curSlide + 1) % slides.length;
 showSlide(curSlide);
}

function prevSlide() {
 curSlide = (curSlide - 1 + slides.length) % slides.length;
 showSlide(curSlide);
}

nextSlide();

//Кнопка подробнее на слайдере
