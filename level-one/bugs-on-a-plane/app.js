var form = document.airlineForm;


form.addEventListener("submit", function(event) {
    event.preventDefault()

    var firstName = form.firstName.value;
    form.firstName.value = ""
    var lastName = form.lastName.value;
    form.lastName.value = ""
    var age = form.age.value;
    form.age.value = ""
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = [];

    for (let i = 0; i < form.food.length; i++) {
        if(form.food[i].checked){
            diet.push(form.food[i].value)
        }
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
})

