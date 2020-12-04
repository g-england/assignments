
//1. Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
    return arr.map(num => num *2)    
}

console.log(doubleNumbers([2, 5, 100])); 

//2. Take an array of numbers and make them strings
function stringItUp(arr){
    return arr.map(num => num.toString())
}

console.log(stringItUp([2, 5, 100]));

//3. Capitalize each of an array of names
function capitalizeNames(arr){
    var newArr = arr.map(name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase())
    return newArr
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//4.Make an array of strings of the names
function namesOnly(arr){
    return arr.map(person => person.name)
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

//5. Make an array of strings of the names saying whether or not
//   they can go to The Matrix
function makeStrings(arr){
    var attendeeList = []
    var ageCheck = arr.map(function(person){
        if (person.age < 18) {
            attendeeList.push(person.name + " is under age!!")
        } else if (person.age >=18){
            attendeeList.push(person.name + " can go to The Matrix")
        }
    })
    return attendeeList
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));

  //6. Make an array of the names in h1s, and the ages in h2s
  function readyToPutInTheDOM(arr){
    var tagArray = []
    var addTags = arr.map(person => {
        tagArray.push("<h1>" + person.name + "</h1><h2>" + person.age + "</h2>")
    })
    return tagArray
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));