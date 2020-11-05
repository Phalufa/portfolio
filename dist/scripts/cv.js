const CV = 'https://bit.ly/38cauqT'
const cv = document.getElementById('cvlink')

const openCV = () => {
  cv.addEventListener('click', () => {
    window.open(CV)
  })
}

export { openCV }