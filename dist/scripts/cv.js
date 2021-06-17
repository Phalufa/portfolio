const CV = 'https://bit.ly/3iSyDbd'
const cv = document.getElementById('cvlink')

const openCV = () => {
	cv.addEventListener('click', () => {
		window.open(CV)
	})
}

export { openCV }
