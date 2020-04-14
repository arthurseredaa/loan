export default class Slider {
  constructor(container, buttons) {
    this.page = document.querySelector(container);
    this.slides = this.page.children;
    this.buttons = document.querySelectorAll(buttons);
    this.slideIndex = 1;
  }
  // метод для определения позиции слайдов 
  showSlides(n) {
    if(n > this.slides.length) {
      this.slideIndex = 1;
    }
    if(n < 1) {
      this.slideIndex = this.slides.length;
    }

    this.slides.forEach(slide => {
      slide.classList.remove('fadeIn');
      slide.classList.add('animated', 'fadeOut');
        slide.style.display = "none";
    });

    this.slides[this.slideIndex - 1].style.display = "block";
    this.slides[this.slideIndex - 1].classList.remove('fadeOut');
    this.slides[this.slideIndex - 1].classList.add('fadeIn');
  }
  // метод для переключения вперед(1) или назад (-1)
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  // главный метод
  render() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.plusSlides(1);
        try {
          // отображение блока через 3 секунды на 3 слайде большого слайдера
          if(this.slideIndex == 3) {
            this.hanson = document.querySelector('.hanson');
            this.hanson.style.display = "none";
            this.hanson.classList.add('animated', 'fadeInUp');
          } else {
            this.hanson.style.display = "none";
          }
          setTimeout(() => {this.hanson.style.display = "block"}, 3000);
          } catch(e) {}
      });
      // При клике на логотип - отображается первый слайд
      btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    this.showSlides(this.slideIndex);
  }
}

