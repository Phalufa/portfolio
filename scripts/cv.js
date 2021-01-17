const CV = 'http://bit.ly/3nQCbcR'
const cv = document.getElementById('cvlink')

const openCV = () => {
  cv.addEventListener('click', () => {
    window.open(CV)
  })
}

export { openCV }