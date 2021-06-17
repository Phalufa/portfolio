const CV = 'https://bit.ly/3wBbjmj'
const cv = document.getElementById('cvlink')

const openCV = () => {
	cv.addEventListener('click', () => {
		window.open(CV)
	})
}

export { openCV }
