const CV = 'http://bit.ly/3bKFLTD'
const cv = document.getElementById('cvlink')

const openCV = () => {
  cv.addEventListener('click', () => {
    window.open(CV)
  })
}

export { openCV }