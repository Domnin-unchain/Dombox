import swipe from './features/swipe'
import './styles/style.css'

console.log('Welcome')

const isSwipejs = window.location.pathname == '/swipejs'
if (isSwipejs) {
  swipe()
}
