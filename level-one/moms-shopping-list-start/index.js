const form = document.addItem

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const input = form.title.value
    form.title.value = ""

    const list = document.getElementById("list")

    const newLi = document.createElement("li")

    const newDiv = document.createElement("div")
    newDiv.textContent = input

    const newButton = document.createElement("button")
    newButton.textContent = "X"

    const editButton = document.createElement("button")
    editButton.textContent = "edit"

    list.append(newLi)
    newLi.append(newDiv)
    newLi.append(newButton)
    newLi.append(editButton)
    


    function removeItem() {
        newLi.style.display = "none"
    }
    newButton.addEventListener("click", removeItem)
    
    function editItem() {
        const editField = document.createElement("input")
        editField.value = newDiv.textContent
        const submitButton = document.createElement("button")
        submitButton.textContent = "Submit"
        newLi.append(editField)
        newLi.append(submitButton)
        // newDiv.textContent = editField.value

        submitButton.addEventListener("click", function(){
            newDiv.textContent = editField.value
            editField.style.display = "none"
            submitButton.style.display = "none"
        })
    }
    editButton.addEventListener("click",(editItem))

})

