//Fizzbuzz Function
const fizzBuzzArr = []
function replace () {
    
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 != 0) {
            const fizz = "Fizz"
            let i = fizz
            fizzBuzzArr.push(fizz)
            console.log(fizz)
        } else if (i % 5 === 0 && i % 3 != 0) {
            const buzz = "Buzz"
            let i = buzz
            fizzBuzzArr.push(buzz)
            console.log(buzz)
        } else if (i % 3 === 0 && i % 5 === 0) {
            const both = "FizzBuzz"
            let i = both
            fizzBuzzArr.push(both)
            console.log(both)
        } else {
            fizzBuzzArr.push(i)
            console.log(i)
        }
    }
}

replace()


//Optional Tally Function
function tally (array) {
    var fizzBuzzTally = 0
    var fizzTally = 0
    var buzzTally = 0

    for (let i = 0; i < fizzBuzzArr.length; i++) {
        if (fizzBuzzArr[i] === "FizzBuzz") {
            var fizzBuzzTally = fizzBuzzTally + 1
        } else if (fizzBuzzArr[i] === "Fizz") {
            var fizzTally = fizzTally + 1
        } else if (fizzBuzzArr[i] === "Buzz") {
            var buzzTally = buzzTally + 1
        }
    }

    var myObject = {
        fizzbuzz: fizzBuzzTally,
        fizz: fizzTally,
        buzz: buzzTally
    }
    console.log(myObject)
}

tally(fizzBuzzArr)



