let winHeight, docHeight, scrollTop, trackLength;
const arrowTop = document.getElementById("top-arrow");
const D = document;

const getDocHeight = () => {
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}
 
var docheight = getDocHeight()

// scroll amount in percentages
let scrollAmount = () => {
    winHeight = window.innerHeight;
    docHeight = getDocHeight(); 
    scrollTop = window.pageYOffset;
    trackLength = docHeight - winHeight;
    return Math.floor(scrollTop / trackLength * 100)
}

let showArrow = () => {

    if (scrollAmount() >= 30)
        arrowTop.classList.add("show-arrow");
    else
        arrowTop.classList.remove("show-arrow");

    if (scrollAmount() == 100)
        arrowTop.classList.add("arrow-position");
    else {
        arrowTop.style.transition = "0.4s linear";
        arrowTop.classList.remove("arrow-position")
    }

    arrowTop.addEventListener("click", () => {
        D.documentElement.scrollTop = 0;
    })
}

export { showArrow, scrollAmount };