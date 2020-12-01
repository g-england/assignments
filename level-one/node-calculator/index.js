const readlineSync = require('readline-sync');

const num1 = readlineSync.question("Please enter a whole number.");
const num2 = readlineSync.question("Please enter another whole number.");
operation = ["add", "subtract", "multiply", "divide"],
selection = readlineSync.keyInSelect(operation, "Please enter the operation to perform.");

function addition (num1, num2) {
    return num1 + num2
}

function subtraction (num1, num2) {
    return num1 - num2
}

function multiplication (num1, num2) {
    return num1 * num2
}

function division (num1, num2) {
    return num1 / num2
}

if (operation[selection] === "add") {
    console.log("The result is:" + " " + (Number(num1) + Number(num2)))
} else if (operation[selection] === "subtract") {
    console.log("The result is:" + " " + (Number(num1) - Number(num2)))
} else if (operation[selection] === "multiply") {
    console.log("The result is:" + " " + (Number(num1) * Number(num2)))
} else if (operation[selection] === "divide") {
    console.log("The result is:" + " " + (Number(num1) / Number(num2)))
}


