const guessGame = document.querySelector(".guess-game")
const englishWordSpan = document.querySelector("#english-word")
const polishWordSpan = document.querySelector("#polish-word")

const anotherWordBtn = document.querySelector("#another-word")
const showTranslateBtn = document.querySelector("#show-translate")

// Losowanie randomowego słowa (podanie losowej liczby w nawiasach)
const randomEnglishWord = i => {
	let randomWord = ""
	randomWord = englishWords[i]
	return randomWord
}

const randomPolishWord = i => {
	let randomWord = ""
	randomWord = polishWords[i]
	return randomWord
}

// Losowanie randomowych liczb z tablic

const generateRandomNumerFromEng = () => {
	return Math.floor(Math.random() * englishWords.length)
}

const generateRandomNumerFromPol = () => {
	return Math.floor(Math.random() * polishWords.length)
}

const executeGuessGame = () => {
	const randomNumber = generateRandomNumerFromEng()

	polishWordSpan.style.animation = ""
	polishWordSpan.classList.add("hide-element")

	englishWordSpan.textContent = randomEnglishWord(randomNumber)
	polishWordSpan.textContent = randomPolishWord(randomNumber)
}

executeGuessGame()

anotherWordBtn.addEventListener("click", () => executeGuessGame())
showTranslateBtn.addEventListener("click", () => {
	polishWordSpan.style.animation = "show-translate 1s"
	polishWordSpan.classList.remove("hide-element")
})
