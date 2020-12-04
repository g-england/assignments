//1. Sort an array from smallest number to largest
function leastToGreatest(arr) {
    arr.sort((a, b) => a - b)
    return arr
  }
  
  console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

//2. Sort an array from largest number to smallest
function greatestToLeast(arr) {
    arr.sort((a, b) => b - a)
    return arr
  }
  
  console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

//3. Sort an array from shortest string to longest
function lengthSort(arr) {
    arr.sort((a, b) => a.length - b.length)
    return arr
  }
  
  console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

//4. Sort an array alphabetically
function alphabetical(arr) {
    var arrayInOrder = arr.sort()
    return arrayInOrder
    //FOR REVERSE ALPHABETICAL ORDER
    //return arrayInOrder.reverse()
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));

//5. Sort the objects in the array by age
function byAge(arr){
    arr.sort((a, b) => a.age - b.age)
    return arr
  }
  
  console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]));



  