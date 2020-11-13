//1.
function capAndLower(string) {
    return string.toUpperCase() + string.toLowerCase();
}

console.log(capAndLower("Hello"))

//2.
function halfStringLength(string) {
    var lengthOf = string.length / 2
    return Math.floor(lengthOf)
}

console.log(halfStringLength("Hello"))

//3.
function firstHalf(string) {
    var half = halfStringLength(string);
    return string.slice(0, half)
}

console.log(firstHalf("Hello"))

//4.
function halfCaps(string) {
    var capHalf = firstHalf(string).toUpperCase()
    var lowerHalf = string.slice(halfStringLength(string)).toLowerCase()
    return capHalf + lowerHalf
}
console.log(halfCaps("Hello"))

//Code Challenge
function capitalize(string) {
    var newStringArr = string.split(" ")
    var secondStringArr = []
    for (i = 0; i < newStringArr.length; i++) {
        var firstLetter = newStringArr[i].slice(0,1).toUpperCase()
        var restOfWord = newStringArr[i].slice(1)
        var newWord = firstLetter + restOfWord
        secondStringArr.push(newWord)
    }
    var finalString = secondStringArr.join(" ")
    return finalString
}
console.log(capitalize("hey friends! practice practice practice!"))

