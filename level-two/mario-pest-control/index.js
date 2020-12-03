const form = document.myForm
const resultBox = document.getElementById("result")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const goombas = Number(form.inputOne.value)
    const bobOmbs = Number(form.inputTwo.value)
    const cheepCheeps = Number(form.inputThree.value)

    form.inputOne.value = ""
    form.inputTwo.value = ""
    form.inputThree.value = ""

    const totalPrice = (goombas * 5) + (bobOmbs * 7) + (cheepCheeps * 11)

    
    resultBox.innerHTML = (totalPrice + " Coins")
})