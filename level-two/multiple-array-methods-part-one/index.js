var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// Using the peopleArray, write a function that:
//1. Returns a list of everyone older than 18, which is
//2. sorted alphabetically by last name, and where
//3. each name and age is embedded in a string that looks like an 
//   HTML <li> element. 

function sortedOfAge(arr){
    var over18 = []
    arr.filter((person) => {
        if (person.age > 18){
            over18.push(person)
        }
    })
    var inOrder = over18.sort((a, b) => {
        var nameA = a.lastName
        var nameB = b.lastName
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0
    })
    var finalArr = []
    inOrder.map((person) => {
        finalArr.push("<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>")
    })
    return finalArr
 }
 
 console.log(sortedOfAge(peopleArray));


 //Extra Credit
 //1. Create another array of one or more individuals and add it to the original array.
 var extraArr = [
     {
         firstName: "Joe",
         lastName: "Rogan",
         age: 45
     },
     {
         firstName: "Lex",
         lastName: "Fridman",
         age: 28
     }
 ]

 var combinedArr = peopleArray.concat(extraArr)
 console.log(combinedArr)

 //(2, 3, 4 Combined) 1.Create a function that filters out all people who's last names end with "y" or "a" and 
 //   save those people in another array
 //2. Remove the second individual from the array.
 //3. Return the array in reverse order.
 function lastNameYOrA (arr){
    var yAndA = []
    var filterOut = arr.map((person) => {
        if (person.lastName.lastIndexOf("y") === person.lastName.length - 1 || person.lastName.lastIndexOf("a") === person.lastName.length - 1){
            yAndA.push(person)
        }
    })
    //return yAndA
    var removeSecondPerson = yAndA.splice(1,1)
    yAndA.reverse()
    return yAndA
 }
 
console.log(lastNameYOrA(peopleArray))


