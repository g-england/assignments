const form = document.travelForm


form.addEventListener("submit", (event) => {
    event.preventDefault()

    const firstName = form.firstName.value
    const lastName = form.lastName.value
    form.firstName.value = ""
    form.lastName.value = ""
    const age = form.age.value
    form.age.value = ""
    const gender = form.gender.value
    const destination = form.destination.value

    const restrictions = []

    for( let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked === true) {
            restrictions.push(form.diet[i].value)
        }
    }




    alert("First name: " + firstName + "\n" + "Last name: " + lastName + "\n" + "Age: " + age + "\n" + "Gender: " + gender + "\n" + "Distination: " + destination + "\n" + "Dietary restrictions: " + restrictions)

})

