const anotherWordBtnFill = document.querySelector(".pick-another-word")
const polishWordFill = document.querySelector(".polish-word-fill")

const emptyEnglishWord = document.querySelector(".empty-english-word")
const allMixedWords = document.querySelector(".all-mixed-words")

// ANIMATIONS ----------------------------
const animationCorrectLetter = [{ color: "#00ff15" }, { color: "#000" }]
const animationWrongLetter = [
	{ backgroundColor: "#ff0909" },
	{ backgroundColor: "#fff" },
]
const animationCorrectWord = [
	{
		transform: "scale(1)",
		color: "#000",
	},
	{
		transform: "scale(1.05)",
		color: "#00ff15",
	},
	{
		transform: "scale(1.08)",
		color: "#00ff15",
	},
	{
		transform: "scale(1)",
		color: "#00ff15",
	},
]

const animationLetterTimimg = {
	duration: 800,
}

const animationWordTimimg = {
	duration: 1000,
	fillMode: "both",
}

//------------------------------

let englishWordToFill = ""

const fillPolishWord = () => {
	let randomNumber = generateRandomNumerFromPol()
	polishWordFill.textContent = randomPolishWord(randomNumber)
	englishWordToFill = randomEnglishWord(randomNumber)
}
fillPolishWord()

const changeEnglishWordToArray = () => {
	emptyEnglishWord.textContent = ""
	allMixedWords.textContent = ""
	const wordArray = englishWordToFill.split("")
	let flaga = 0

	const arrayNumber = []
	for (let i = 0; i < wordArray.length; i++) {
		arrayNumber.push(i)
	}

	for (let i = 0; i < wordArray.length; i++) {
		const randomNumber = Math.floor(Math.random() * arrayNumber.length)
		mixWord(wordArray[arrayNumber[randomNumber]])

		arrayNumber.splice(randomNumber, 1)
	}

	const allP = allMixedWords.querySelectorAll("p")

	allP.forEach(p => {
		p.addEventListener("click", e => {
			if (e.target.textContent == wordArray[flaga]) {
				emptyEnglishWord.style.color = "#000"
				emptyEnglishWord.textContent += e.target.textContent
				++flaga
				if (wordArray.length === flaga) {
					emptyEnglishWord.animate(animationCorrectWord, animationWordTimimg)
					emptyEnglishWord.style.color = "#00ff15"
				} else {
					emptyEnglishWord.animate(
						animationCorrectLetter,
						animationLetterTimimg
					)
				}
			} else {
				e.target.animate(animationWrongLetter, animationLetterTimimg)
			}
		})
	})
}

const mixWord = i => {
	const p = document.createElement("p")
	p.textContent = i
	allMixedWords.append(p)
}

changeEnglishWordToArray()

anotherWordBtnFill.addEventListener("click", () => {
	fillPolishWord()
	changeEnglishWordToArray()
})
