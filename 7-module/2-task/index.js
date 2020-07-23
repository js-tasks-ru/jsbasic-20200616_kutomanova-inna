import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.divModal= document.createElement('div');
    this.divModal.classList.add('modal');
    
    document.addEventListener('keydown', this.event.bind(this));
    
    let divModalOverlay = document.createElement('div');
    divModalOverlay.classList.add('modal__overlay');
    this.divModal.appendChild(divModalOverlay);

    let divModalInner = document.createElement('div');
    divModalInner.classList.add('modal__inner');
    this.divModal.appendChild(divModalInner);

    let divModalHeader = document.createElement('div');
    divModalHeader.classList.add('modal__header');
    divModalInner.appendChild(divModalHeader);

    let buttonModalClose = document.createElement('button');
    buttonModalClose.classList.add('modal__close');
    divModalHeader.appendChild(buttonModalClose);

    let imgButtonX = document.createElement('img');
    imgButtonX.setAttribute('src', '/assets/images/icons/cross-icon.svg');
    imgButtonX.setAttribute('alt', 'close-icon');
    buttonModalClose.appendChild(imgButtonX);
    imgButtonX.addEventListener('click', this.close.bind(this));

    this.ModalTitle = document.createElement('h3');
    this.ModalTitle.classList.add('modal__title');
    this.ModalTitle.innerHTML = 'Заголовок модального окна';
    divModalHeader.appendChild(this.ModalTitle);

    this.divModalBody = document.createElement('div');
    this.divModalBody.classList.add('modal__body');
    divModalInner.appendChild(this.divModalBody);
       
  }

  open() {
    let divContainer = document.querySelector('.container');
    divContainer.appendChild(this.divModal);
    let body = document.querySelector('body');
    body.classList.add('is-modal-open');
  }

  setTitle(Title_name) {
    this.ModalTitle.innerHTML = Title_name;
  }

  setBody(Div_body){
    this.divModalBody.innerHTML = '';
    this.divModalBody.appendChild(Div_body);
  }

  close() {
    
    let divContainer = document.querySelector('.container');
    divContainer.removeChild(this.divModal);
    let body = document.querySelector('body');
    body.classList.remove('is-modal-open');
    
  }

  event() {
    if (event.code == 'Escape') {
      this.close();
    }
  }
}