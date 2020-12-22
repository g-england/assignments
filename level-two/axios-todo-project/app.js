// const editButton = document.createElement("button")
// editButton.className = "fa fa-edit"
// const trashButton = document.createElement("button")
// trashButton.className = "fa fa-trash"
// trashButton.className = "test"

// function getData(){
    
// }


//GET
window.addEventListener("load", () => {
    axios.get("https://api.vschool.io/garrettengland1/todo")
    .then(response => {
        
        for (let i = 0; i < response.data.length; i++){
            const title = response.data[i].title;
            const description = response.data[i].description;
            const price = response.data[i].price;
            const idNumber = response.data[i]._id;
            const completed = response.data[i].completed;
            const image = response.data[i].imgUrl;
            

            const newImage = document.createElement("IMG");
            newImage.setAttribute("src", image)
            const newP = document.createElement("p")
            newP.textContent = "Title: " + title
            const newP2 = document.createElement("p")
            newP2.textContent = "Description: " + description
            const newP3 = document.createElement("p")
            if(price === null){
                newP3.textContent = "Price: " 
            } else {
                newP3.textContent = "Price: " + price
            }
            
            const div = document.createElement("div");
            div.setAttribute('data-div', idNumber)

            const editButton = document.createElement("button")
            editButton.className = "fa fa-edit"
            const trashButton = document.createElement("button")
            trashButton.setAttribute('data-trash', idNumber)
            trashButton.className = "fa fa-trash"
            trashButton.addEventListener("click", function(){
                var number = this.getAttribute('data-trash')
                this.parentElement.style.display = "none"
                axios.delete("https://api.vschool.io/garrettengland1/todo/" + number)
            })

            const checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.setAttribute('data-checkbox', idNumber)
            

            checkbox.addEventListener("click", function(){
                var checkboxNumber = this.getAttribute('data-checkbox')
                console.log(checkboxNumber)
                var updateCompleted = {
                    completed: false
                }
                if (this.checked) {
                    this.parentElement.style.textDecoration = "line-through"
                    updateCompleted.completed = true
                } else {
                    this.parentElement.style.textDecoration = "none"
                    updateCompleted.completed = false
                }
                axios.put("https://api.vschool.io/garrettengland1/todo/" + checkboxNumber, updateCompleted)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
            })
            checkbox.className = "checkbox"


            const lineBreak = document.createElement("br")
            div.append(checkbox)
            div.append(newP, newP2, newP3)
            if (image !== ""){
                div.append(newImage)
            } else {
                newImage.style.display = 'none'
            }
            div.append(lineBreak)
            div.append(trashButton, editButton)
            
            if(completed === true){
                div.style.textDecoration = "line-through"
                checkbox.checked = true
            }
           
            document.getElementsByTagName("div")[4].appendChild(div)
        }

    })

})





// POSTING
const form = document.myForm;

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const newTodo = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.image.value
    }

    axios.post("https://api.vschool.io/garrettengland1/todo", newTodo)
        .then(res => {

            const idNumber = res.data._id
            const title = form.title.value;
            const description = form.description.value;
            const price = form.price.value;
            const image =form.image.value;
            console.log(image)
            const newImage = document.createElement("IMG");
            newImage.setAttribute("src", image)
            
            if (title == 0){
                form.description.value = ""
                form.price.value = ""
                removeEventListener()
            }
        
            form.title.value = ""
            form.description.value = ""
            form.price.value = ""
            form.image.value = ""
            const newP = document.createElement("p")
            newP.textContent = "Title: " + title
            const newP2 = document.createElement("p")
            newP2.textContent = "Description: " + description
            const newP3 = document.createElement("p")
            if(price === null){
                newP3.textContent = "Price: " 
            } else {
                newP3.textContent = "Price: " + price
            }
            
            const div = document.createElement("div");
        
            const editButton = document.createElement("button")
            editButton.className = "fa fa-edit"
            const trashButton = document.createElement("button")
            trashButton.setAttribute('data-trash', idNumber)
            trashButton.className = "fa fa-trash"
            trashButton.addEventListener("click", function(){
                var number = this.getAttribute('data-trash')
                this.parentElement.style.display = "none"
                axios.delete("https://api.vschool.io/garrettengland1/todo/" + number)
            })
            const checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.setAttribute('data-checkbox', idNumber)
            checkbox.addEventListener("click", function(){
                var checkboxNumber = this.getAttribute('data-checkbox')
                console.log(checkboxNumber)
                var updateCompleted = {
                    completed: false
                }
                if (this.checked) {
                    this.parentElement.style.textDecoration = "line-through"
                    updateCompleted.completed = true
                } else {
                    this.parentElement.style.textDecoration = "none"
                    updateCompleted.completed = false
                }
                axios.put("https://api.vschool.io/garrettengland1/todo/" + checkboxNumber, updateCompleted)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
            })
            checkbox.className = "checkbox"
            
            const lineBreak = document.createElement("br")

            div.append(checkbox)
            div.append(newP, newP2, newP3)
            if (image == "something"){
                div.append(newImage)
            } else {
                newImage.display = "none"
            }
            div.append(lineBreak)
            div.append(trashButton, editButton)
           
            document.getElementsByTagName("div")[4].appendChild(div)
        })
    

})


//PUT











//Buttons


 