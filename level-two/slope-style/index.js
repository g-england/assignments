//Green Circle

//1)Use the Rest Operator to help this function return an array of animals,
//no matter how many animals are passed to it:

function collectAnimals(...animals) {  
    return [...animals]
}

console.log("GREEN:")
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//2)
//Write a function that returns a food object with the array names as 
//properties using Object Literals:

function combineFruit(fruit, sweets, vegetables){
    return {
        "fruit": fruit,
        "sweets": sweets,
        "vegetables": vegetables
    }
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

// => {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }

//3)
//Use destructuring to use the property names as variables. 
//Desructure the object in the parameter:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};
  
function parseSentence({location, duration}){
return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence(vacation))

//4)
//Use destructuring to make this code ES6:

returnFirst = (firstItem, ...items) => firstItem;

console.log(returnFirst(1, 2, 3))

//5)
//Write destructuring code to assign variables that will help us 
//return the expected string. Also, change the string to be using 
//Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let firstFav = arr[1];
    let secondFav = arr[2];
    let thirdFav = arr[4];
    return `My top three favorite activities are, "${firstFav}", "${secondFav}", and "${thirdFav}".`;
}

console.log(returnFavorites(favoriteActivities))

//Blue Square
//Use the Rest and Spread Operator to help take any number of arrays, 
//and return one array. You will need to change how the arrays are passed in. 
//You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(...arrays) {  
    return arrays.reduce((final, array) => [...final, ...array]);
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log("BLUE:")
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Black Diamond
//1)Try to make the following function more ES6xy:

function product(...numbers) {  
    return numbers.reduce((acc, number) => acc * number, 1)
}

console.log("BLACK DIAMOND:")
console.log(product(1, 2, 3, 2))

//2)
//Make the following function more ES6xy. Use at least both the rest and spread operators:

unshift = (array, ...items) => [...items, ...array]

const diamondArr = [4, 5, 6]
console.log(unshift(diamondArr, 1, 2, 3))

//Double Black Diamond
//Write some destructuring code to help this function out. 
//Use object literals to simplify it:

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        let firstName = name[0];
        let lastName = name[1];
        return {
            "firstName": firstName,
            "lastName": lastName
        }
    })
}



console.log("DOUBLE BLACK DIAMOND:");
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]


