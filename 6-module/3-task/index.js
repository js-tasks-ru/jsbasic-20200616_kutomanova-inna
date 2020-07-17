import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    
    this.divArrowRight = document.createElement('div');
    this.divArrowRight.classList.add('carousel__arrow');
    this.divArrowRight.classList.add('carousel__arrow_right');

    this.divArrowRight.addEventListener('click', this.slideToRight.bind(this));

    this.divArrowLeft = document.createElement('div');
    this.divArrowLeft.classList.add('carousel__arrow');
    this.divArrowLeft.classList.add('carousel__arrow_left');

    this.divArrowLeft.addEventListener('click', this.slideToLeft.bind(this));

    this.elem.appendChild(this.divArrowRight);
    this.elem.appendChild(this.divArrowLeft);

    let imgArrowIconRight = document.createElement('img');
    imgArrowIconRight.setAttribute('src', '/assets/images/icons/angle-icon.svg');
    imgArrowIconRight.setAttribute('alt', 'icon');

    let imgArrowIconLeft = document.createElement('img');
    imgArrowIconLeft.setAttribute('src', '/assets/images/icons/angle-left-icon.svg');
    imgArrowIconLeft.setAttribute('alt', 'icon');

    this.divArrowRight.appendChild(imgArrowIconRight);
    this.divArrowLeft.appendChild(imgArrowIconLeft);

    this.divCarouselInner = document.createElement('div');
    this.divCarouselInner.classList.add('carousel__inner');

    this.elem.appendChild(this.divCarouselInner);
    
  
    for (let i = 0; i < slides.length; i++) {
      let divCarouselSlide = document.createElement('div');
      divCarouselSlide.classList.add('carousel__slide');
      divCarouselSlide.setAttribute('data-id', this.slides[i].id);
      
      

      this.divCarouselInner.appendChild(divCarouselSlide);
      
      let imgCarouselImg = document.createElement('img');
      imgCarouselImg.classList.add('carousel__img');
      imgCarouselImg.setAttribute('src', '/assets/images/carousel/' + slides[i].image); 
      imgCarouselImg.setAttribute('alt', 'slide');

      let divCarouselCaption = document.createElement('div');
      divCarouselCaption.classList.add('carousel__caption');

      divCarouselSlide.appendChild(imgCarouselImg);
      divCarouselSlide.appendChild(divCarouselCaption);

      let spanCarouselPrice = document.createElement('span');
      spanCarouselPrice.classList.add('carousel__price');
      spanCarouselPrice.innerHTML = '€' + slides[i].price.toFixed(2);
      
      let divCarouselTitle = document.createElement('div');
      divCarouselTitle.classList.add('carousel__title');
      divCarouselTitle.innerHTML = this.slides[i].name;

      let carouselButton = document.createElement('button');
      carouselButton.classList.add('carousel__button');
      carouselButton.setAttribute('type', 'button');
      
      divCarouselCaption.appendChild(spanCarouselPrice);
      divCarouselCaption.appendChild(divCarouselTitle);
      divCarouselCaption.appendChild(carouselButton);

      let imgPlusIcon = document.createElement('img');
      imgPlusIcon.setAttribute('src', '/assets/images/icons/plus-icon.svg');
      imgPlusIcon.setAttribute('alt', 'icon');
      imgPlusIcon.addEventListener('click', CustomEvent);

      carouselButton.appendChild(imgPlusIcon);
      
    }
    
    this.elem.onclick = ev => {
      this.elem.dispatchEvent(new CustomEvent("product-add", { 
        detail: this.slides.id,
        bubbles: true,
      }));
    }

    this.divArrowLeft.style.display = "none";
    this.numberImg = 0;
    this.widthSlide = 0;
    
  }

  slideToRight() {
    if (this.widthSlide==0){
      let divCaruselSlide = document.querySelector('.carousel__slide');
      this.widthSlide = divCaruselSlide.offsetWidth;
    }
    
    if (this.numberImg < this.slides.length) {
      this.numberImg++;
  
      this.divCarouselInner.style.transform = 'translateX(-'+ this.numberImg* this.widthSlide +'px)';
      this.divArrowLeft.style.display = "";
    }
    if (this.numberImg === this.slides.length - 1) {
      this.divArrowRight.style.display = "none";
    }
  }
  
  slideToLeft() {
    if (this.numberImg > 0 ) {
      this.numberImg--;
  
      this.divCarouselInner.style.transform = 'translateX(-'+ this.numberImg* this.widthSlide +'px)';
      this.divArrowRight.style.display = "";
    }
    if (this.numberImg === 0) {
      this.divArrowLeft.style.display = "none";
    }
  }
}




