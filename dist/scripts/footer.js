import { scrollAmount } from "./arrow.js"

const footer = document.getElementById("footer");
const icons = footer.querySelectorAll("i");
const iconDesc = footer.querySelectorAll("span");
const headings = document.getElementsByClassName("heading");

let animateFooter = () => {
    if (scrollAmount() >= 45) {  // on #project section and below
        footer.classList.add("show-footer")
        footer.style.transition = "0.3s linear";
    } else
        footer.classList.remove("show-footer")  // hide footer

    if (scrollAmount() >= 95) {   // on #contact section and below
        footer.classList.add("enlarge");    // enlarge footer
        for (let i = 0; i < icons.length; i++) {
            icons.item(i).style.transition = "0.4s linear";
            icons.item(i).classList.replace("fa-2x", "fa-4x");  // enlarge icons

            iconDesc.item(i).classList.add("static");   // visible icons descriptions
        }
    } else {
        footer.classList.remove("enlarge");
        for (let i = 0; i < icons.length; i++) {
            icons.item(i).classList.replace("fa-4x", "fa-2x");
            iconDesc.item(i).classList.remove("static");
        }
    }
}

export { animateFooter }