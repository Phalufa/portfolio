import { animateFooter } from "./footer.js"
import { showArrow } from "./arrow.js"

window.addEventListener('scroll', (event) => {
    animateFooter();    // display footer with animations
    showArrow(); // display navigate top arrow
})