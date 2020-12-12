//let and const
//Replace all the vars with let and const. Alter the code however necessary to make sure 
//this continues to work (so the pet's name isn't "John", but instead "spot" is returned). 
//You only need to delete var and insert let and const

const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

console.log("Let and Const:")
runForLoop(["cat", "dog"])

//ES6 Arrow Functions
//Task 1
//Re-write this .map() using an arrow function:

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot) => ({ type: "carrot", name: carrot }))
}

console.log("Task 1:")
console.log(mapVegetables(carrots))

//Task 2
//Re-write this .filter() using an arrow function:
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter((person) => person.friendly)
}

console.log("Task 2:")
console.log(filterForFriendly(people))

//Task 3
//Re-write the following functions to be arrow functions:

doMathSum = (a, b) => a + b

var produceProduct = (a, b) => a * b

console.log("Task 3:")
console.log(doMathSum(3, 3))
console.log(produceProduct(1, 3))

//Task 4
//Write a printString function that takes firstName, lastName, and age as parameters 
//and returns a string like the following:

const name2 = {
    firstName: "Kat",
    lastName: "Stark",
    age: 40
}
printString = ({firstName = "John", lastName = "Doe", age = 100} ={}) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

console.log("Task 4:");
console.log(printString(name2))

//Task 5
//Use the shorthand syntax to make the following filter take up one line. 
//Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => (animal.type === "dog")) 
 }

 console.log("Task 5:")
 console.log(filterForDogs(animals))

//Template Literals
//Using template literals, write a function that takes "location" and "name"
//parameters and outputs a message formatted like this:

const person = {
    name: "Janice",
    location: "Hawaii"
}

greeting = ({name, location}) => `Hi ${name}!

Welcome to ${location}.

I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

console.log("Template Literals:")
console.log(greeting(person))

