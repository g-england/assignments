const myHeader = document.getElementById("header");
myHeader.innerHTML = "<h1> JavaScript Made This!! </h1>"
myHeader.style.textAlign = "center";
const span = document.createElement("span")
span.innerText = "Garrett England"
myHeader.append(span)
span.style.color = "Orange"
const span2 = document.createElement("span")
myHeader.append(span2)
span2.innerText = " wrote the JavaScript"

//Bronze
const leftMessages = document.getElementsByClassName("left")
leftMessages[0].innerHTML = "You're a wizard Harry!"
leftMessages[1].innerHTML = "A wizard! And a thumpin good one I'd wager, once you're trained up a little."

const rightMessages = document.getElementsByClassName("right")
rightMessages[0].innerHTML = "I'm a what?"
rightMessages[1].innerHTML = "No you've made a mistake, I mean I... can't be a wizard. I'm just Harry."

document.getElementById("clear-button").addEventListener("click", function(){
    leftMessages[0].innerHTML = ""
    leftMessages[1].innerHTML = ""

    rightMessages[0].innerHTML = ""
    rightMessages[1].innerHTML = ""

    myHeader.style.color = "grey"
})

//Silver
const dropDown = document.getElementById("theme-drop-down");
dropDown.addEventListener("change", function() {
    if (dropDown.value === "theme-two") {
        leftMessages[0].style.backgroundColor = "black"
        leftMessages[1].style.backgroundColor = "black"
        leftMessages[0].style.color = "white"
        leftMessages[1].style.color = "white"

        rightMessages[0].style.backgroundColor = "red"
        rightMessages[1].style.backgroundColor = "red"
        rightMessages[0].style.color = "white"
        rightMessages[1].style.color = "white"
    } else if (dropDown.value === "theme-one") {
        leftMessages[0].style.backgroundColor = "burlywood"
        leftMessages[1].style.backgroundColor = "burlywood"
        leftMessages[0].style.color = "black"
        leftMessages[1].style.color = "black"

        rightMessages[0].style.backgroundColor = "lightblue"
        rightMessages[1].style.backgroundColor = "lightblue"
        rightMessages[0].style.color = "black"
        rightMessages[1].style.color = "black"
    }
    // leftMessages[0].innerHTML = dropDown.value
})

//Gold
const form = document["message"]
const formName = document.getElementById("input").name = "inputValue"
const messageBox = document.getElementsByClassName("messages")
const inputBox = document.getElementById("input")

form.addEventListener("click", function(){
    inputBox.value = ""
})

form.addEventListener("submit", function(){
    const input = form.inputValue.value
    const newMessage = document.createElement("div")
    newMessage.innerHTML = input
    messageBox.appendChild(input)

})


