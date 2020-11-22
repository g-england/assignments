const readlineSync = require("readline-sync")

var userName = readlineSync.question("Welcome to Colossal Adventure! You are about to embark on a treacherous journey where you will encounter more than a few enemies. With enough luck, you just might live. Please enter your name to continue:");

let isAlive = true
let attacking = true
var inventory = {
    name: userName,
    HP: 100,
    items: []
}

var enemies = {
    voldemort: 100,
    theBeast: 100,
    moriarty: 100
}

var opponent = ""

function whileWalking() {
    while (isAlive === true) {
        const walking = readlineSync.keyIn("Press 'w' to walk.", {limit: "w"});
        if (walking === "w") {
            const enemyAppears = Math.floor(Math.random() * 4) + 1;
            if (enemyAppears === 2) {
                var theEnemy = Math.floor(Math.random() * 3) + 1;
                if (theEnemy === 1) {
                    opponent = "Voldemort"
                    console.log("Look out " + userName + "! You encountered LORD VOLDEMORT!!")
                    break
                } else if (theEnemy === 2) {
                    opponent = "Beast"
                    console.log("Look out " + userName + "! You encountered THE BEAST!!")
                    break
                } else if (theEnemy === 3) {
                    opponent = "Moriarty"
                    console.log("Look out " + userName + "! You encountered MORIARTY!!")
                    break
                }
            } 
        }
    }
}

whileWalking()

var isFighting = true
// Finished Here
function opponentDammage(min, max) {

}

function whileFighting() {
    readlineSync.keyInPause()
    if (opponent === "Voldemort") {
        while (isFighting === true) {
            fightOptions = ["Attack", "Run"],
            index = readlineSync.keyInSelect(fightOptions, "Do you want to attack or run?")
            if (fightOptions[index] === "Attack") {
                 
            }
        }
    } else if (currentlyFighting === "Beast") {
        fightOptions = ["Attack", "Run"],
        index = readlineSync.keyInSelect(fightOptions, "Do you want to attack or run?")
        if (fightOptions[index] === "Attack") {
            console.log("ATTACK")
        }
    } else if (currentlyFighting === "Moriarty") {
        fightOptions = ["Attack", "Run"],
        index = readlineSync.keyInSelect(fightOptions, "Do you want to attack or run?")
        if (fightOptions[index] === "Attack") {
            console.log("ATTACK")
        }
    }
}

whileFighting()





