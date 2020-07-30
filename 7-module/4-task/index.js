export default class StepSlider {
  constructor({ steps, value = 0 }) {

    this.steps = steps;
    this.value = value;
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');

    document.addEventListener('pointermove', this.sliderOnPointerMove.bind(this));
    this.elem.addEventListener('pointerdown', this.sliderOnPointerDown.bind(this));
    document.addEventListener('pointerup', this.sliderOnPointerUp.bind(this));

    this.sliderThumb = document.createElement('div');
    this.sliderThumb.classList.add('slider__thumb');
    this.elem.appendChild(this.sliderThumb);

    this.sliderValue = document.createElement('span');
    this.sliderValue.classList.add('slider__value');
    this.sliderValue.innerHTML = value;
    this.sliderThumb.appendChild(this.sliderValue);

    this.sliderProgress = document.createElement('div');
    this.sliderProgress.classList.add('slider__progress');
    this.elem.appendChild(this.sliderProgress);
    
    let sliderSteps = document.createElement('div');
    sliderSteps.classList.add('slider__steps');
    sliderSteps.length = steps;
    this.elem.appendChild(sliderSteps);
    
    for (let i = 0; i <= sliderSteps.length - 1; i++) {
      let sliderStepsSpan = document.createElement('span');
      sliderSteps.appendChild(sliderStepsSpan);
    }

    this.leftPercents = 0;
    this.newValue = 0;
    this.flagSliderActive = 0;
 
  }
  
  setSliderPosition(value) {
    if (this.value != value){
      let span = document.querySelector( '.slider__steps' ).querySelectorAll( '*' )[ this.value ];
      span.classList.remove('slider__step-active');

      this.value = value;

      this.sliderValue.innerHTML = value;
      span = document.querySelector( '.slider__steps' ).querySelectorAll( '*' )[ value ];
      span.classList.add('slider__step-active');
     
      this.leftPercents = value * (100 / (this.steps - 1)); 

      this.sliderThumb.style.left = `${this.leftPercents}%`;
      this.sliderProgress.style.width = `${this.leftPercents}%`;
    }

  }
  
  sliderOnPointerDown(ev) {
    this.sliderThumb.ondragstart = () => false;
    this.sliderThumb.classList.add('slider_dragging');
    this.flagSliderActive = 1;
  }

  sliderOnPointerMove(ev) {
    if (this.flagSliderActive === 1) {
      this.calculateSliderPosition(ev);

      this.sliderValue.innerHTML = this.newValue;

      this.sliderThumb.style.left = `${this.leftPercents}%`;
      this.sliderProgress.style.width = `${this.leftPercents}%`;
    }
  }

  sliderOnPointerUp(ev) {
    if (this.flagSliderActive === 1) {
      this.sliderThumb.classList.remove('slider_dragging');
      
      this.calculateSliderPosition(ev);
      this.setSliderPosition(this.newValue);

      this.flagSliderActive = 0;
      this.elem.dispatchEvent(new CustomEvent('slider-change', { 
        detail: this.value,
        bubbles: true,
      }));
    }
  }

  calculateSliderPosition(ev) {
    let left = ev.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = (left / this.elem.offsetWidth);
    
    if (leftRelative < 0) {
      leftRelative = 0;
    }
    
    if (leftRelative > 1) {
      leftRelative = 1;
    }

    this.leftPercents = leftRelative * 100;
    
    let segments = this.steps - 1;
    this.newValue = Math.round(leftRelative * segments);
  }
}