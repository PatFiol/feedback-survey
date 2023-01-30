
const sendBtn = document.querySelector('#submit')
const welcome = document.querySelector('.welcome')


sendBtn.addEventListener('click', (e) => {
	panel.remove();
	sendBtn.remove();
	welcome.innerHTML = `
	<i class="fa-solid fa-heart"></i>
	Thank you for your feedback!
	`
})
