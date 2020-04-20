import Slider from './slider';

export default class MiniSlider extends Slider{
  constructor(container, prev, next, activeClass, animate, autoplay) {
    super(container, prev, next, activeClass, animate, autoplay);
  }

  bindTriggers() {
    this.next.addEventListener('click', () => this.nextSlide);

    this.prev.addEventListener('click', () => {
      // перебираем масив слайдеров(с кнопками) с конца
      for(let i = this.slides.length - 1; i > 0; i--) {
        let active = this.slides[i];
        this.container.insertBefore(active, this.slides[0]);
        this.decorizeSlides();
      }
      let active = this.slides[this.slides.length - 1];
      this.container.insertBefore(active, this.slides[0]);
      this.decorizeSlides();
    });
  }

  decorizeSlides() {
    this.slides.forEach(slide => {
      slide.classList.remove(this.activeClass);

      if(this.animate) {
        slide.querySelector('.card__title').style.opacity = '.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
        slide.querySelector('.card__controls').style.opacity = '0';
      }
    });
    if(!this.slides[0].closest('button')) {
      this.slides[0].classList.add(this.activeClass);
    }

    if(this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }

    if (!this.slides[0].closest('button')) {
      this.slides[0].classList.add(this.activeClass);
    }
  }
  // move slide 
  nextSlide() {
    // Эти 2 условия фиксят баг с кнопками в слайдере(узакоментируй их и узнаешь что за баг)
    if(this.slides[1].tagName === "BUTTON") {
      this.container.appendChild(this.slides[1]);
    this.decorizeSlides();
    } 
    if(this.slides[2].tagName === "BUTTON") {
      this.container.appendChild(this.slides[2]);
      this.decorizeSlides();
    }
    this.container.appendChild(this.slides[0]);
    this.decorizeSlides();
  }
  // Здесь юзаю cssText
  init() {
    this.container.style.cssText = `display: flex;
      justify-content: space-around;
      overflow: hidden;
      flex-wrap: wrap;
    `;

    if(this.autoplay) {
      let move = setInterval(() => this.nextSlide(), 5000);
    }

    this.bindTriggers();
    this.decorizeSlides();
  }
}