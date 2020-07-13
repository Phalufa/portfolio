import { scrollAmount } from "./top.js"

const footer = document.getElementById("footer");

// hide footer while page scrolled before #project section
let animateFooter = () => {
    if (scrollAmount() >= 45) // on #project section
        footer.classList.add("show-footer")
    else
        footer.classList.remove("show-footer")
}

export { animateFooter }