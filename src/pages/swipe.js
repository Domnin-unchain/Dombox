import Swiper from 'swiper/bundle'

import 'swiper/css/bundle'

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  mousewheel: true,
  keyboard: true,
  loop: true,
  speed: 800,
})

function swipe() {
  console.log('Hello')
}

export default swipe
