import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';
import products from './products.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem = document.createElement('div');
    this.elem.classList.add('products-grid');

    this.divProductsGridInner = document.createElement('div');
    this.divProductsGridInner.classList.add('products-grid__inner');
    this.elem.appendChild(this.divProductsGridInner);

    for (let i = 0; i < products.length; i++) {
      let card = new ProductCard(products[i]);

      this.divProductsGridInner.appendChild(card.elem);
    }

  }

  updateFilter(filters) {
    this.divProductsGridInner.innerHTML = '';

    if (filters.noNuts !== undefined) {
      this.filters.noNuts = filters.noNuts;
    }

    if (filters.vegeterianOnly !== undefined) {
      this.filters.vegeterianOnly = filters.vegeterianOnly;
    }

    if (filters.maxSpiciness !== undefined) {
      this.filters.maxSpiciness = filters.maxSpiciness;
    }

    if (filters.category !== undefined) {
      this.filters.category = filters.category;
    }

    for (let j = 0; j < this.products.length; j++) {
      let flag = 1;

      if (this.filters.noNuts == '' || this.filters.noNuts == false || this.filters.noNuts == undefined) {
        flag = flag & 1;
      } else {
        if (this.products[j].nuts == false || this.products[j].nuts == undefined) {
          flag = flag & 1;
        } else {
          flag = flag & 0;
        }
      }

      if (this.filters.vegeterianOnly == '' || this.filters.vegeterianOnly == false || this.filters.vegeterianOnly == undefined) {
        flag = flag & 1;
      } else {
        if (this.products[j].vegeterian == true) {
          flag = flag & 1;
        } else {
          flag = flag & 0;
        }
      }

      if (this.filters.maxSpiciness == '' || this.filters.maxSpiciness == false || this.filters.maxSpiciness == undefined) {
        flag = flag & 1;
      } else {
        if (this.products[j].spiciness <= this.filters.maxSpiciness) {
          flag = flag & 1;
        } else {
          flag = flag & 0;
        }
      }

      if (this.filters.category == '' || this.filters.category == undefined) {
        flag = flag & 1;
      } else {
        if (this.filters.category == this.products[j].category) {
          flag = flag & 1;
        } else {
          flag = flag & 0;
        }
      }

      if (flag == 1) {
        let card = new ProductCard(products[j]);

        this.divProductsGridInner.appendChild(card.elem);
      }
    }
  }
}
