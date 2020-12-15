class Player {
    constructor(args) {
        this.name = args.name;
        this.totalCoins = args.totalCoins;
        this.status = args.status;
        this.hasStar = false;
        this.gameActive = true;
    }

    setName(namePicked) {
        this.name = namePicked;
    }

    gotHit() {
        if (this.status === "Powered Up") {
            if (this.hasStar === true) {
                console.log("Your star protected you! \n");
                this.status = "Powered Up";
                this.hasStar = false;
            } else {
                this.status = "Big";
            }
        } else if (this.status === "Big") {
            if (this.hasStar === true) {
                console.log("Your star protected you! \n");
                this.status = "Big";
                this.hasStar = false;
            } else {
                this.status = "Small";
            }
        } else if (this.status === "Small") {
            if (this.hasStar === true) {
                console.log("Your star protected you! \n");
                this.status = "Small";
                this.hasStar = false;
            } else {
                this.status = "Dead";
                this.gameActive = false;
            }
        }
    }

    gotPowerup() {
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        } else if (this.status === "Powered Up" && this.hasStar === false) {
            this.hasStar = true;
            console.log("Congratulations! You got a star!")
        } else if (this.status === "Powered Up" && this.hasStar === true) {
            // do nothing
        }
    }

    addCoin() {
        this.totalCoins += 1
    }

    print() {
        //console.log("Name: " + this.name + "/n" + "Status: " + this.status +   )
        let starActive = "";
        if (this.hasStar === true) {
            starActive = "Active";
        } else if (this.hasStar === false) {
            starActive = "Not Active";
        }
        console.log(`Name: ${this.name}
Total Coins: ${this.totalCoins}
Status: ${this.status}
Star: ${starActive}`)
        }
}



let myPlayer = new Player({status: "Powered Up", totalCoins: 0})
//SET NAME:
myPlayer.setName("Mario")


function randomNumber() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        myPlayer.gotHit();
    } else if (random === 1) {
        myPlayer.gotPowerup();
    } else if (random === 2) {
        myPlayer.addCoin();
    }

    myPlayer.print()
    console.log("\n")
}

var intervalID = setInterval(function(){
    randomNumber()
    if (myPlayer.gameActive === false) {
        console.log("Oh no! You died! Game over.")
        console.log("Your final score was: " + myPlayer.totalCoins)
        clearInterval(intervalID)
    }
}, 1500)



