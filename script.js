
const submitBtn = document.getElementById('submit')
const message = document.querySelector('.header')


// Change question automatically
function updateQuestion() {
  const questions = [
    'How do you feel about your experience?',
    'What do you think of the quality of our products?',
    'How was the service of our staff?',
    'What are the chances for you visiting us again?'
  ];

  const questionElement = document.getElementById('question');
  let currentQuestionIndex = parseInt(questionElement.dataset.questionIndex) || 0;

  if (currentQuestionIndex === questions.length - 1) {
    const ratingContainer = document.querySelector('.rating-container');
    ratingContainer.removeEventListener('click', updateQuestion);
    submitBtn.style.display = 'block';
  } else {
    currentQuestionIndex += 1;
    questionElement.dataset.questionIndex = currentQuestionIndex;
    questionElement.textContent = questions[currentQuestionIndex];
  }
}

// Add event listener to the rating container
const ratingContainer = document.querySelector('.rating-container');
ratingContainer.addEventListener('click', updateQuestion);


// Hide panel and display Thank you message
submitBtn.addEventListener('click', (e) => {
	panel.remove();
	submitBtn.remove();
	message.innerHTML = `
	<li><i class="fa-solid fa-heart"></i></li>
	Thank you for your feedback!
	`
})
