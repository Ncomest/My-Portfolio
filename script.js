//-- Данные для слайдера
const slides = [
 {
  web: "https://ncomest.github.io/Landing-market/",
  image: `url("image/project1.png")`,
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
  image: "url(image/project2.png)",
  title: "WTube - база данных фильмов",
  text: `- Использование хуков (useState, useEffect, useRef, useContext)
  - Адаптивная верстка с использованием Flex и Grid
  - Применение React Router для навигации между страницами
  - Асинхронные запросы API
  - Создание формы входа и регистрации, личный кабинет пользователя
  - Реализация переключения языков
  - Сохранение данных в Local и Session Storage
  - Внедрение слайдера и карусели с использованием React - библиотеки
  - Реализация поиска,сортировки и фильтрация карточек фильмов`,
  icons: [
   "https://img.icons8.com/?size=100&id=A6r5yddU9uA0&format=png&color=d4d4d4",
   "https://img.icons8.com/?size=100&id=23028&format=png&color=d4d4d4",
  ],
 },
];

//-- Для слайдера
let curSlide = 0;
let isTransition = false;

//-- Функция для слайдера
function showSlide(index) {
 if (isTransition) return;

 isTransition = true;
 const slide = slides[index];
 const slideElement = document.querySelector(".slide-js");
 const imageElement = document.querySelector(".slider-img-js");
 const titleElement = document.querySelector(".slider-title-js");
 const iconsList = document.querySelector(".stack-box-js");
 const btnMore = document.querySelector(".button-more-js");
 const windowWidth = window.innerWidth;
 console.log(windowWidth);

 setTimeout(() => {
  imageElement.style.backgroundImage = slide.image;
  titleElement.innerText = slide.title;
  slideElement.style.flexDirection =
   index % 2 === 0
    ? windowWidth <= 768
      ? "column"
      : "row"
    : windowWidth <= 768
    ? "column"
    : "row-reverse";

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

  setTimeout(() => (isTransition = false), 500);
 }, 0);
}

//-- Следующий слайд
function nextSlide() {
 curSlide = (curSlide + 1) % slides.length;
 showSlide(curSlide);
}

//-- Предыдущий слайд
function prevSlide() {
 curSlide = (curSlide - 1 + slides.length) % slides.length;
 showSlide(curSlide);
}

//-- Запуск функции
nextSlide();

//-- Шарики справа экрана
document.addEventListener("DOMContentLoaded", function () {
 const sections = {
  ball1: document.getElementById("welcome-section"),
  ball2: document.getElementById("skills-section"),
  ball3: document.getElementById("project-section"),
  ball4: document.getElementById("contact-section"),
 };

 const balls = {
  ball1: document.getElementById("ball1-js"),
  ball2: document.getElementById("ball2-js"),
  ball3: document.getElementById("ball3-js"),
  ball4: document.getElementById("ball4-js"),
 };

 window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  for (const ball in sections) {
   const section = sections[ball];
   if (
    section.offsetTop <= scrollPosition &&
    section.offsetTop + section.offsetHeight > scrollPosition
   ) {
    balls[ball].classList.add("active");
   } else {
    balls[ball].classList.remove("active");
   }
  }
 });
});

//-- Burger появление и скрытие
document.addEventListener("DOMContentLoaded", function () {
 const burgerMenu = document.getElementById("burgerMenu");
 let lastScrollY = window.scrollY;

 window.addEventListener("scroll", function () {
  if (window.scrollY > lastScrollY && window.scrollY > 50) {
   // Прокручиваем вниз и прокрутили достаточно, чтобы скрыть бургер
   burgerMenu.classList.add("hidden");
  } else {
   // Прокручиваем вверх или вверху страницы, показываем бургер
   burgerMenu.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
 });
});

//-- Отправка сообщения на почту hurtik.igor@gmail.com через emailjs.com (рег на eledan почте)
function sendMail() {
 const params = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  message: document.getElementById("message").value,
 };

 const serviceID = "service_u8rzbgx";
 const templateID = "template_0ihfdi9";

 emailjs
  .send(serviceID, templateID, params)
  .then((res) => {
   document.getElementById("name").value = "";
   document.getElementById("email").value = "";
   document.getElementById("message").value = "";
   console.log(res);
   alert("your message sent succes");
  })
  .catch((err) => console.log(err));
}

//-- Меню справа с navbar
document.getElementById("burgerMenu").addEventListener("click", function () {
 let navbarMobile = document.getElementById("navbarMobile");
 let body = document.body;
 navbarMobile.classList.toggle("active");
 body.classList.toggle("no-scroll");
});

// Функция для закрытия меню
function closeMenu() {
 var navbarMobile = document.getElementById("navbarMobile");
 var body = document.body;
 navbarMobile.classList.remove("active");
 body.classList.remove("no-scroll");
}

// Добавляем обработчики событий на элементы меню
var menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(function (item) {
 item.addEventListener("click", function () {
  closeMenu();
 });
});
