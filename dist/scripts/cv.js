const CV = 'http://bit.ly/30Rt6Yi'
const cv = document.getElementById('cvlink')

const openCV = () => {
	cv.addEventListener('click', () => {
		window.open(CV)
	})
}

export { openCV }
