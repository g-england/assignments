var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));


function cipher(input, shift) {
    //take the text and do something
    let stringArray = []
    for (let char of input) {
        let code
        if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
            code = char.charCodeAt() + shift
            if (code > 122) {
                let difference = code - 122
                code = 96 + difference 
            }
        } else {
            code = char.charCodeAt()
        }
        let ciphered = String.fromCharCode(code)
        stringArray.push(ciphered)
    }

    let joinArray = stringArray.join("")
    console.log("")
    console.log(joinArray)  
    //shift each letter to the right by number specified
    //return new text
}

cipher(input, shift)
