const wordsContainer = document.querySelector(".words-container")
const menuList = [...document.querySelectorAll("menu ul li")]
const wordsPage = document.querySelector(".words-page")

const guessGame = document.querySelector(".guess-game")
const fillGame = document.querySelector(".fill-game")
const chooseGame = document.querySelector(".choose-game")

const anotherWordBtn = document.querySelector("#another-word")
const showTranslateBtn = document.querySelector("#show-translate")

const allDivsGame = [...document.querySelectorAll(".container > div")]

menuList.forEach(li => {
	li.addEventListener("click", () => {
		if (li.dataset.match == wordsPage.dataset.match) {
			allDivsGame.forEach(div => {
				div.classList.remove("active")
			})
			wordsPage.classList.add("active")
		} else if (li.dataset.match == guessGame.dataset.match) {
			allDivsGame.forEach(div => {
				div.classList.remove("active")
			})
			guessGame.classList.add("active")
		} else if (li.dataset.match == fillGame.dataset.match) {
			allDivsGame.forEach(div => {
				div.classList.remove("active")
			})
			fillGame.classList.add("active")
		} else if (li.dataset.match == chooseGame.dataset.match) {
			allDivsGame.forEach(div => {
				div.classList.remove("active")
			})
			chooseGame.classList.add("active")
		}
	})
})

const addAllWords = i => {
	const spanWord = document.createElement("span")
	spanWord.textContent = `${englishWords[i]} - ${polishWords[i]}`
	wordsContainer.appendChild(spanWord)
}

for (let i = 0; i < englishWords.length; i++) {
	addAllWords(i)
}



