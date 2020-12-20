






const form = document.myForm;

form.addEventListener("submit", function(event) {
event.preventDefault()


const list = document.getElementById("listDiv");
const input = form.input.value;
if (input == 0){
    removeEventListener()
}
form.input.value = ""

const newDiv = document.createElement("div");
newDiv.textContent = input;
document.getElementsByTagName("div")[4].append(newDiv)

})

