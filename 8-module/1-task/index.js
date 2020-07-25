import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
    this.flagUpdatePosition = 0;
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
  
    if (document.documentElement.clientWidth <= 767) {
      Object.assign(this.elem.style, {
        position: '',
        top: '',
        left: '',
        zIndex: ''
      });
    } else {
      let initialTopCoordinate = this.elem.getBoundingClientRect().top + window.pageYOffset;
      
        if (window.pageYOffset > initialTopCoordinate) {
          if (this.flagUpdatePosition == 0) {
            this.elem.style.position = "fixed";
      
            let leftIndent = Math.min(
              document.querySelector('.container').getBoundingClientRect().right + 20,
              document.documentElement.clientWidth - this.elem.offsetWidth - 10
            );
              
            Object.assign(this.elem.style, {
              position: 'fixed',
              top: '50px',
              zIndex: 1e3,
              right: '10px',
              left: `${leftIndent}px`
            });

            this.flagUpdatePosition = 1;
        }
      
      } else {
        this.elem.style.position = "absolute";
  
        Object.assign(this.elem.style, {
          position: '',
          top: '',
          left: '',
          zIndex: ''
        });

        this.flagUpdatePosition = 0;
      }
    }
        
  }
}
