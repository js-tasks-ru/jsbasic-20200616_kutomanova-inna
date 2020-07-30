import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');
    this.elem.onclick = ev => {
      this.elem.dispatchEvent(new CustomEvent("ribbon-select", {
        detail: ev.categories.id,
        bubbles: true,
      }));
    }
    this.buttonArrowLeft = document.createElement('button');
    this.buttonArrowLeft.classList.add('ribbon__arrow', 'ribbon__arrow_left', 'ribbon__arrow_visible');
    this.buttonArrowLeft.addEventListener('click', this.scrollToLeft.bind(this));
    
    let imgIconLeft = document.createElement('img');
    imgIconLeft.setAttribute('alt', 'icon');
    imgIconLeft.setAttribute('src', '/assets/images/icons/angle-icon.svg');
    this.buttonArrowLeft.appendChild(imgIconLeft);

    this.navRibbonInner = document.createElement('nav');
    this.navRibbonInner.classList.add('ribbon__inner');
    this.navRibbonInner.addEventListener('scroll', this.ScrollEvent.bind(this));
    for (let i = 0; i < categories.length; i++) {
      let aRibbonItem = document.createElement('a');
      aRibbonItem.setAttribute('href', '#');
      aRibbonItem.classList.add('ribbon__item');
      aRibbonItem.setAttribute('data-id', this.categories[i].id);
      aRibbonItem.innerHTML = this.categories[i].name;
      this.navRibbonInner.appendChild(aRibbonItem);
      aRibbonItem. addEventListener('click', this.clickRibbonItem.bind(this));
    }

    this.buttonArrowRight = document.createElement('button');
    this.buttonArrowRight.classList.add('ribbon__arrow', 'ribbon__arrow_right');
    this.buttonArrowRight.addEventListener('click', this.scrollToRight.bind(this));

    let imgIconRight = document.createElement('img');
    imgIconRight.setAttribute('alt', 'icon');
    imgIconRight.setAttribute('src', '/assets/images/icons/angle-icon.svg');
    this.buttonArrowRight.appendChild(imgIconRight);
    
    
    this.elem.appendChild(this.buttonArrowLeft);
    this.elem.appendChild(this.navRibbonInner);
    this.elem.appendChild(this.buttonArrowRight);
    
    this.scrollLeft = 0;
    this.scrollWidth = 0;
    this.clientWidth = 0;
    this.scrollRight = 0;
    
  }
  
  scrollToLeft() {
    if (this.scrollRight==0)
    {
      this.scrollLeft = this.navRibbonInner.scrollLeft;
      this.scrollWidth = this.navRibbonInner.scrollWidth;
      this.clientWidth = this.navRibbonInner.clientWidth;
      this.scrollRight = this.scrollWidth - this.scrollLeft - this.clientWidth;
    }

    if (this.navRibbonInner.scrollLeft < this.scrollRight){
      this.navRibbonInner.scrollBy(350, 0);
      this.buttonArrowRight.classList.add('ribbon__arrow_visible');
    }
  }
    
  scrollToRight() {
    if (this.navRibbonInner.scrollLeft > 0){
      this.navRibbonInner.scrollBy(-350, 0);
      this.buttonArrowLeft.classList.add('ribbon__arrow_visible');
    } 
  }

  ScrollEvent (){
    if (this.navRibbonInner.scrollLeft >= this.scrollRight) {
      this.buttonArrowLeft.classList.remove('ribbon__arrow_visible');
    }
    if (this.navRibbonInner.scrollLeft <= 1) {
      this.buttonArrowRight.classList.remove('ribbon__arrow_visible');
    }
  }

  clickRibbonItem(event) {
    event.preventDefault();
    let id = event.target.dataset.id;
    
    for (let j = 1; j < this.navRibbonInner.children.length; j++) {
      let qqq = this.navRibbonInner.children[j].getAttribute('data-id') ;
      if (this.navRibbonInner.children[j].getAttribute('data-id') === id) {
        this.navRibbonInner.children[j].classList.add('ribbon__item_active');
      } else {
        this.navRibbonInner.children[j].classList.remove('ribbon__item_active');
      }
    }
      
  }
   
} 