//Addition
const form = document.addition
var resultBox = document.getElementById("result-add")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    var firstNumberAdd = Number(form.firstNumberAdd.value)
    var secondNumberAdd = Number(form.secondNumberAdd.value)

    form.firstNumberAdd.value = ""
    form.secondNumberAdd.value = ""

    var resultAdd = firstNumberAdd + secondNumberAdd;
   

    resultBox.innerHTML = resultAdd

})

//Subtraction
const formSub = document.subtraction
var resultBoxSub = document.getElementById("result-sub")

formSub.addEventListener("submit", function(event) {
    event.preventDefault()

    var firstNumberSub = Number(formSub.firstNumberSub.value)
    var secondNumberSub = Number(formSub.secondNumberSub.value)

    formSub.firstNumberSub.value = ""
    formSub.secondNumberSub.value = ""

    var resultSub = firstNumberSub - secondNumberSub;
   

    resultBoxSub.innerHTML = resultSub

})

//Multiplication
const formMul = document.multiplication
var resultBoxMul = document.getElementById("result-multiply")

formMul.addEventListener("submit", function(event) {
    event.preventDefault()

    var firstNumberMul = Number(formMul.firstNumberMul.value)
    var secondNumberMul = Number(formMul.secondNumberMul.value)

    formMul.firstNumberMul.value = ""
    formMul.secondNumberMul.value = ""

    var resultMul = firstNumberMul * secondNumberMul;
   

    resultBoxMul.innerHTML = resultMul

})