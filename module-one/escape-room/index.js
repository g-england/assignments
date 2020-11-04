const readlineSync = require('readline-sync');

console.log("Welcome to the Escape Room. You are trapped in a room and must find your way out. Press any key to continue.")
readlineSync.keyInPause();
options = ['Put hand in hole', 'Find the key', 'Open the door'],index = readlineSync.keyInSelect(options, 'Please select an option to begin:');
let isAlive = true

while(isAlive === true){
if (options[index] === 'Put hand in hole') {
    console.log("You died! Restart game to try again.")
    isAlive = false
} else if (options[index] === 'Find the key') {
    console.log("You found the key")
    escape = readlineSync.keyInYN('Do you want to enter the door')
    if (escape === true){
        console.log("YOU ESCAPED YOU WIN!!!")
        break
    } else {
        console.log("YOU DIED ")
        isALive = false
        break
    }
   
} else if (options[index] === 'Open the door') {
    console.log("Sorry, you can't open the door yet.")
    options = ['Put hand in hole', 'Find the key', 'Open the door'],
    index = readlineSync.keyInSelect(options, 'Please select another option:');
}
}


