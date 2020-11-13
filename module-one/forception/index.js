var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var myArr = []


function forception(people, alphabet) {
    var myArr = []
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (i = 0; i < people.length; i++) {
        var names = people[i] + ":"
        myArr.push(names)
        for (j = 0; j < alphabet.length; j++) {
            var capLetters = alphabet[j].toUpperCase()
            var sliceLetters = capLetters.slice(0,1)
            myArr.push(sliceLetters)
        }
    }
    return myArr;
}
console.log(forception(people, alphabet))


