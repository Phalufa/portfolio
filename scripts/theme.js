const checkbox = document.querySelector('input[name=theme]');

let switchTheme = () => {
    checkbox.addEventListener('change', function() {
        const de = document.documentElement;
        this.checked ?
            de.setAttribute('data-theme', 'dark') : de.setAttribute('data-theme', 'light')
    })
}

export { switchTheme }