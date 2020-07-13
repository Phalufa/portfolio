import { animateFooter } from "./footer.js"
import { showTopArrow } from "./top.js"

window.addEventListener('scroll', (event) => {
    animateFooter();    // display footer with animation
    showTopArrow(); // display top navigation arrow
})