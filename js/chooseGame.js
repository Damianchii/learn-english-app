const nextGameBtn = document.querySelector("#next-word")
const choosedEnglishWord = document.querySelector(".choosed-english-word")
const allPolishWords = [...document.querySelectorAll(".select-right-word p")]

const randomPolishNumber = () => {
	const randomNumber = Math.floor(Math.random() * polishWords.length)
	return randomNumber
}

const chooseRandomEnglishWord = () => {
	const randomNumber = Math.floor(Math.random() * englishWords.length)
	const randomNumberOfAnswers = Math.floor(
		Math.random() * allPolishWords.length
	)

	allPolishWords.forEach((word, i) => {
		if (i != randomNumber) {
			allPolishWords[i].textContent = polishWords[randomPolishNumber()]
		}
	})

	choosedEnglishWord.textContent = randomEnglishWord(randomNumber)

	allPolishWords[randomNumberOfAnswers].textContent =
		randomPolishWord(randomNumber)

	allPolishWords.forEach(word => {
		word.addEventListener("click", e => {
			if (e.target.textContent === randomPolishWord(randomNumber)) {
				e.target.style.border = "5px solid rgb(0, 255, 21)"
			} else {
				e.target.style.border = "5px solid rgb(255, 0, 0)"
			}
		})
	})
}

chooseRandomEnglishWord()
nextGameBtn.addEventListener("click", () => {
	allPolishWords.forEach(word => {
		word.style.border = "0"
	})
	chooseRandomEnglishWord()
})
