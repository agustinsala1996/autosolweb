//slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Slider functionality reusable
let slideIndexx = 1;
showSlidesx(slideIndexx);
function plusSlidesx(n) {
  showSlidesx((slideIndexx += n));
}
function currentSlidex(n) {
  showSlidesx((slideIndexx = n));
}
function showSlidesx(n) {
  let i;
  let slidesx = document.getElementsByClassName("mySlidesx");
  let dotsx = document.getElementsByClassName("dotx");
  if (n > slidesx.length) {
    slideIndexx = 1;
  }
  if (n < 1) {
    slideIndexx = slidesx.length;
  }
  for (i = 0; i < slidesx.length; i++) {
    slidesx[i].style.display = "none";
  }
  for (i = 0; i < dotsx.length; i++) {
    dotsx[i].className = dotsx[i].className.replace(" activex", "");
  }
  slidesx[slideIndexx - 1].style.display = "block";
  dotsx[slideIndexx - 1].className += " activex";
}
