const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const rightSlideBtn = document.getElementById("right");
const leftSlideBtn = document.getElementById("left");
let curSlide = 0;
const slideLen = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);
// NExt Slide
const nextSlide = function () {
  if (curSlide == slideLen - 4) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
// prev slide
const prevSlide = function () {
  if (curSlide == 0) {
    curSlide = slideLen - 4;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
rightSlideBtn.addEventListener("click", nextSlide);
leftSlideBtn.addEventListener("click", prevSlide);
