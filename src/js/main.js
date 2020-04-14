import Slider from'./modules/slider';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
  "use strict";
  const pageSlider = new Slider('.page', '.next');
  pageSlider.render();

  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();
});