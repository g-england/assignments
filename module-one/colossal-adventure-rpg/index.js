const readlineSync = require("readline-sync")

var userName = readlineSync.question("Welcome to Colossal Adventure! You are about to embark on a treacherous journey where you will encounter more than a few enemies. With enough luck, you just might live. Please enter your name to continue:");

var victoryItems = ["gun", "ammo", "body armour"]
let isAlive = true
var enemyIndex = 1
var isFighting = true
var opponent = ""

//PLAYER INVENTORY
var inventory = {
    name: userName,
    hp: 100,
    items: []
}
//ENEMIES OBJECT
var enemies = [
    {
        name: "Voldemort",
        hp: 100
    },

    {
        name: "The Beast",
        hp: 100
    },

    {
        name: "Moriarty",
        hp: 100
    }
]

var defeatedEnemies
var defeatedEnemiesFinal = []

//RANDOM DAMAGE TO OPPONENT
function damageToOpponent(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//RANDOM DAMAGE TO PLAYER
function damageToPlayer(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



function whileWalking() {
    while (isAlive === true) {
        //Removed enemy automatic health regeneration
        //for (i = 0; i < enemies.length; i++) {
            //enemies[i].hp = 100;
        //}
        const walking = readlineSync.keyIn("Press 'w' to walk.", {limit: "w"});
        if (walking === "w") {
            const enemyAppears = Math.floor(Math.random() * 4) + 1;
            if (enemyAppears === 2) {
                enemyIndex = Math.floor(Math.random() * enemies.length); //Made change to random enemy algorithm (length of arrayinstead of 3)
                opponent = enemies[enemyIndex].name
                console.log("Look out " + userName + "! You encountered " + enemies[enemyIndex].name + "!!");
                readlineSync.keyInPause()
                while (isFighting === true) {
                    fightOptions = ["Attack", "Run", "Quit Game"],
                    index = readlineSync.keyInSelect(fightOptions, "Do you want to attack or run?");
                    if (fightOptions[index] === "Attack") {
                        var opponentDamage = damageToOpponent(20, 40);
                        console.log("Damage to " + opponent + ": " + opponentDamage);
                        enemies[enemyIndex].hp -= opponentDamage;
                        console.log(opponent + " HP: " + enemies[enemyIndex].hp)
                        if (enemies[enemyIndex].hp <= 0) {
                            console.log("Conratulations!! You defeated " + enemies[enemyIndex].name + "!!");
                            defeatedEnemies = enemies.splice(enemyIndex, 1);
                            defeatedEnemiesFinal.push(defeatedEnemies)
                            console.log("Enemies defeated:");
                            console.log(defeatedEnemiesFinal); // ADDED DEFEATED ENEMIES ARRAY
                            if (enemies.length === 0) {
                                console.log("YOU WON!! Despite all odds, you have defeated all the enemies and conquered the Colossal Adventure RPG!! Take a well deserved rest hero.");
                                isAlive = false
                                break
                            }
                            var itemsReceived = Math.floor(Math.random() * 3);
                            inventory.items.push(victoryItems[itemsReceived])
                            console.log("Well done!! Inventory received: " + victoryItems[itemsReceived])
                            inventory.hp += 50
                            if (inventory.hp > 100) {
                                inventory.hp = 100
                            }
                            const showInventory = readlineSync.keyIn("Press 'p' to see you inventory.", {limit: "p"});
                            if (showInventory === "p") {
                                console.log(inventory)
                                readlineSync.keyInPause()
                            }
                            break
                        }
                        var myDamage = damageToPlayer(15, 30)
                        readlineSync.keyInPause()
                        console.log(enemies[enemyIndex].name + " attacked!!")
                        console.log("Damage to " + userName + ": " + myDamage)
                        inventory.hp -= myDamage;
                        console.log(userName + " HP: " + inventory.hp)
                        if (inventory.hp <= 0) {
                        console.log("YOU HAVE SUFFERED A MOST HORRIFIC DEATH!")
                        isAlive = false
                        break
                        }
                    } else if (fightOptions[index] === "Run") {
                        var attemptEscape = Math.floor(Math.random() * 2);
                        if (attemptEscape === 1) {
                            console.log("You escaped!")
                            break
                        } else if (attemptEscape === 0) {
                            console.log("Your escape failed!")
                            var myDamage2 = damageToPlayer(15, 30)
                            readlineSync.keyInPause()
                            console.log(enemies[enemyIndex].name + " attacked!!")
                            console.log("Damage to " + userName + ": " + myDamage2)
                            inventory.hp -= myDamage2;
                            console.log(userName + " HP: " + inventory.hp)
                            if (inventory.hp <= 0) {
                            console.log("YOU HAVE SUFFERED A MOST HORRIFIC DEATH!")
                            isAlive = false
                            break
                            }
                        }
                    } else if (fightOptions[index] === "Quit Game") {
                        isAlive = false
                        break
                    }
                }
            } 
        }
    }
}

whileWalking()




