const CV = 'https://drive.google.com/file/d/1HQU11_befSFgslrFSUrTkbv0K6FxCSvM/view?usp=sharing'
const cv = document.getElementById('cvlink')

const openCV = () => {
  cv.addEventListener('click', () => {
    window.open(CV)
  })
}

export { openCV }