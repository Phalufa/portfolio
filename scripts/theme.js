const checkbox = document.querySelector('input[name=theme]')
const mode = localStorage.getItem('mode')

let switchTheme = () => {
    const de = document.documentElement
    de.setAttribute('data-theme', mode )

    if (mode === 'dark')
        checkbox.setAttribute('checked', true)
    
    checkbox.addEventListener('change', function () {

        this.checked
        ? de.setAttribute('data-theme', 'dark')
        : de.setAttribute('data-theme', 'light')
        
        localStorage.setItem('mode', de.getAttribute('data-theme'))
	})
}

export { switchTheme }
