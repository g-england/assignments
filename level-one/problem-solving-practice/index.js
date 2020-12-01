//1. Largest Number

largestNumber = (array) => {
    var number = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > number)
        var number = array[i]
    }
    console.log(number)
}

largestNumber([-11, -4, -18, -20])

//2. Special Characters
function characters (array, character) {
    var characterArr = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === character) {
                characterArr.push(array[i])
            }
        }
    }
    console.log(characterArr)
}

characters(["#3", "$$$", "C%4!", "Hey!"], "!")

//3. Is Divisible Function

function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
        console.log(true)
    } else if (num1 % num2 != 0) {
        console.log(false)
    }
}

isDivisible(15, 4)

