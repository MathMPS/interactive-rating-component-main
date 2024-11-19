const mainContainer = document.querySelector(".box-one")

const thanksContainer = document.querySelector(".box-two")

const submitButton = document.getElementById("submit")

const rating = document.getElementById("rating")

const rates = document.querySelectorAll(".button")


rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

