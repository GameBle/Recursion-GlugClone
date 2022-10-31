let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let rect = document.getElementsByClassName("dot");
  //console.log(typeof rect);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    rect[i].style.backgroundColor = "#bbb";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  rect[slideIndex-1].style.backgroundColor = "#FA631C";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}