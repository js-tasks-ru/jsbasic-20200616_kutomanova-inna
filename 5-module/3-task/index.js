function initCarousel() {
  let allCarusel = document.querySelector('.container'); 
  let elementCaruselInner = document.querySelector('.carousel__inner');
  let elementCaruselSlide = document.querySelector('.carousel__slide');
  let elementArrowRight = document.querySelector('.carousel__arrow_right');
  let elementArrowLeft = document.querySelector('.carousel__arrow_left');
  let widthSlide = elementCaruselSlide.offsetWidth ;
  let numberImg = 0;
  elementArrowLeft.style.display = "none";

  function slideToRight () {
    if (numberImg < 3) {
      numberImg++;

      elementCaruselInner.style.transform = 'translateX(-'+ numberImg* widthSlide +'px)';
      elementArrowLeft.style.display = "";
    }
    if (numberImg === 3) {
      elementArrowRight.style.display = "none";
    }
  }

  function slideToLeft () {
    if (numberImg > 0 ) {
      numberImg--;

      elementCaruselInner.style.transform = 'translateX(-'+ numberImg* widthSlide +'px)';
      elementArrowRight.style.display = "";
    }
    if (numberImg === 0) {
      elementArrowLeft.style.display = "none";
    }
  }

  elementArrowRight.addEventListener('click', slideToRight);
  elementArrowLeft.addEventListener('click', slideToLeft);
}