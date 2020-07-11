const footer = document.getElementById("footer");

// hide footer while page scrolled top
let animateFooter = () => {
    if (window.scrollY !== 0)
        footer.classList.add("show-footer")
    else {
        footer.classList.remove("show-footer")
    }
}

export { animateFooter }