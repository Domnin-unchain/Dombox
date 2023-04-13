import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import home from './pages/home'
import swipe from './pages/swipe'
import './styles/style.css'

//Smooth scroll LenisJS
function scroll() {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

scroll()

//GSAP
gsap.registerPlugin(ScrollTrigger)

//Page import code
const isHome = window.location.pathname == '/'
if (isHome) {
  home()
}

const isSwipejs = window.location.pathname == '/swipejs'
if (isSwipejs) {
  swipe()
}
