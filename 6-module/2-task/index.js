import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = document.createElement('div');
    this.elem.classList.add('card');

    let divCardTop = document.createElement('div');
    divCardTop.classList.add('card__top');
    this.elem.appendChild(divCardTop);

    let imgProduct = document.createElement('img');
    imgProduct.classList.add('card__image');
    imgProduct.setAttribute('src', '/assets/images/products/laab_kai_chicken_salad.png');
    imgProduct.setAttribute('alt', 'product');

    let spanCardPrice = document.createElement('span');
    spanCardPrice.classList.add('card__price');
    spanCardPrice.innerHTML = '€' + this.product.price.toFixed(2);

    divCardTop.appendChild(imgProduct);
    divCardTop.appendChild(spanCardPrice);

    let divCardBody = document.createElement('div');
    divCardBody.classList.add('card__body');
    this.elem.appendChild(divCardBody);

    let divCardTitle = document.createElement('div');
    divCardTitle.classList.add('card__title');
    divCardTitle.innerHTML = this.product.name;

    let cardButton = document.createElement('button');
    cardButton.classList.add('card__button');

    let imgPlusIcon = document.createElement('img');
    imgPlusIcon.setAttribute('src', '/assets/images/icons/plus-icon.svg');
    imgPlusIcon.setAttribute('alt', 'icon');

    cardButton.appendChild(imgPlusIcon);
    imgPlusIcon.addEventListener('click', CustomEvent);

    divCardBody.appendChild(divCardTitle);
    divCardBody.appendChild(cardButton);
    
    this.elem.onclick = ev => {
      this.elem.dispatchEvent(new CustomEvent("product-add", { 
        detail: this.product.id,
        bubbles: true,
      }));
    }
  }
}