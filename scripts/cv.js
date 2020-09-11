const CV = 'http://bit.ly/2GLrw3i'
const cv = document.getElementById('cvlink')

const openCV = () => {
  cv.addEventListener('click', () => {
    window.open(CV)
  })
}

export { openCV }