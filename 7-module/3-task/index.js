export default class StepSlider {
  constructor({ steps, value = 0 }) {

    this.steps = steps;
    this.value = value;
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.elem.addEventListener('click', this.sliderClick.bind(this));

    let sliderThumb = document.createElement('div');
    sliderThumb.classList.add('slider__thumb');
    //sliderThumb.style.left = '50%';
    this.elem.appendChild(sliderThumb);

    this.sliderValue = document.createElement('span');
    this.sliderValue.classList.add('slider__value');
    this.sliderValue.innerHTML = value;
    sliderThumb.appendChild(this.sliderValue);

    let sliderProgress = document.createElement('div');
    sliderProgress.classList.add('slider__progress');
    //sliderProgress.style.width = '50%';
    this.elem.appendChild(sliderProgress);
    
    let sliderSteps = document.createElement('div');
    sliderSteps.classList.add('slider__steps');
    sliderSteps.length = steps;
    this.elem.appendChild(sliderSteps);
    
    for (let i = 0; i <= sliderSteps.length - 1; i++) {
      let sliderStepsSpan = document.createElement('span');
      sliderSteps.appendChild(sliderStepsSpan);
    }

    this.elem.onclick = ev => {
      this.elem.dispatchEvent(new CustomEvent('slider-change', { 
      detail: this.value,
      bubbles: true,
      }));
    }
  }
  
  setSliderPosition(value) {
    if (this.value != value){
      let span = document.querySelector( '.slider__steps' ).querySelectorAll( '*' )[ this.value ];
      span.classList.remove('slider__step-active');

      this.value = value;

      this.sliderValue.innerHTML = value;
      span = document.querySelector( '.slider__steps' ).querySelectorAll( '*' )[ value ];
      span.classList.add('slider__step-active');

      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');

      let leftPercents = value * (100 / (this.steps - 1)); 

      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;
      //debugger

    }

  }

  sliderClick(ev) {
    let fff = ev.target.className;
    let left = ev.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = Math.round((this.steps - 1) * left / this.elem.offsetWidth);
    this.setSliderPosition(leftRelative);
    //debugger
  }

}
