document.getElementById('question').innerHTML =
	'What do you think of the quality of our products?'

const ratings = document.querySelectorAll('rating')
const showQuestion = document.querySelectorAll('questions')
const nextBtn = document.querySelector('#next')
// const sendBtn = document.querySelectorAll('#panel')

let questionIndex = 0

const questions = [
	'How do you feel about your experience?',
	'What do you think of the quality of our products?',
	'How was the service of our staff?',
	'What are the chances for you visiting us again?',
]

function nextQuestion() {
	questionIndex++
	console.log(questionIndex)
	document.querySelector('#question').innerHTML = questions[questionIndex]
}

nextBtn.addEventListener('click', nextQuestion)


