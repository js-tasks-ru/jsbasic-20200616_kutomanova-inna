export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    let pos_in_List = this.cartItems.findIndex((item) => item.product.name === product.name);

    if (pos_in_List > -1) {
      this.cartItems[pos_in_List].count += 1;

    } else {
      this.cartItems.push({ product: product, count: 1 });
    }
    this.onProductUpdate(this.cartItems);
  }

  updateProductCount(productId, amount) {
    let pos_in_List = this.cartItems.findIndex((item) => item.product.id === productId);

    if (pos_in_List > -1) {
      this.cartItems[pos_in_List].count += amount;

      if (this.cartItems[pos_in_List].count === 0) {
        this.cartItems.splice(pos_in_List, 1);
      }

      this.onProductUpdate(this.cartItems);

    }
  }

  isEmpty() {
    if (this.cartItems.length == 0) {
      return true;
    }
    return false;
  }

  getTotalCount() {
    let result = this.cartItems.reduce(function (sum, current) {
      return sum + current.count;
    }, 0);
    return result;
  }

  getTotalPrice() {
    let result = this.cartItems.reduce(function (sum, current) {
      return sum + current.count * current.product.price;
    }, 0);

    return result;

  }

  onProductUpdate() {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

