var counter = document.getElementById("counter")
var timer = document.getElementById("timer")
var webPage = document



var number = 0



window.onload = function(){
    //ENABLE FOR A CLICK COUNT RESTART:
    //localStorage.removeItem("digit")
    var afterLoad = localStorage.getItem("digit")
    counter.textContent = afterLoad
    //Start Timer
    var startTime = 10
    timer.textContent = startTime
    function startCountDown(){
        timer.textContent -= 1
    }

    function stopCountDown(){
        clearInterval(intervalID)
        webPage.removeEventListener("click", clicker)
        
    }
    var intervalID = setInterval(startCountDown, 1000);
    setTimeout(stopCountDown, 10000)

}


function clicker() {
    var numberRetreived = JSON.parse(localStorage.getItem("digit"))
    if (number === 0 && numberRetreived > 0) {
        numberRetreived += 1
        JSON.stringify(localStorage.setItem("digit", numberRetreived))
        counter.textContent = numberRetreived
    } else {
        counter.textContent = 1
        JSON.stringify(localStorage.setItem("digit", 1))
    }
}

webPage.addEventListener("click", clicker)
    

        // TO RESET COUNTER ENABLE FOLLOWING CODE:
        //localStorage.removeItem("digit") 




