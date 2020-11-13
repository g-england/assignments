var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1.
var lastItem = vegetables.pop()

//2.
var firstItem = fruit.shift()

//3.
var index = fruit.indexOf("orange")
console.log(index)

//4.
var addNumberToFruit = fruit.push(1)

//5.
var vegLength = vegetables.length
console.log(vegLength)

//6.
var addNumberToVegetables = vegetables.push(3)

//7.
var food = fruit.concat(vegetables)

//8.
var remove = food.splice(4, 2)

//9. 
var reverse = food.reverse()

//10.
var string = food.join()

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("food:", food)
console.log(string)
