import VideoPlayer from './modules/playVideo';
import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
// TODO: сделать остановку автопереключения при наведение мышки на слайд в slider-mini.js
window.addEventListener('DOMContentLoaded', () => {
  "use strict";
  // SLIDERS
  const pageSlider = new MainSlider({btns: '.next', container: '.page'});

  const showUpSlider = new MiniSlider({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true,
  });

  const modulesSlider = new MiniSlider({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true,
  });

  const feedSlider = new MiniSlider({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active',
  });

  pageSlider.render();
  showUpSlider.init();
  modulesSlider.init();
  feedSlider.init();

  // VIDEO'S
  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();
});