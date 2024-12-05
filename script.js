const mainContainer = document.querySelector(".box-one");
const thanksContainer = document.querySelector(".box-two");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".button");

let selectedRate = null;

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        selectedRate = rate.innerHTML;
        rating.innerHTML = selectedRate;
    });
});

submitButton.addEventListener("click", () => {
    if (selectedRate) {
        thanksContainer.classList.remove("hidden");
        mainContainer.style.display = "none";
    } else {
        alert("Por favor, selecione uma classificação antes de enviar."); // Exibe uma mensagem de erro
    }
});
