import { animateFooter } from "./footer.js";
import { showArrow } from "./arrow.js";
import { switchTheme } from "./theme.js";
import { showCoupownsVideo } from "./video.js";
import { openCV } from "./cv.js";

window.addEventListener('scroll', (event) => {
    animateFooter()    // display footer with animations
    showArrow() // display navigate top arrow
})

openCV()
showCoupownsVideo() // display project video
switchTheme()