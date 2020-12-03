var counter = document.getElementById("counter")

var webPage = document



var number = 0



window.onload = function(){
    var afterLoad = localStorage.getItem("digit")
    counter.textContent = afterLoad
}



webPage.addEventListener("click", () => {
    var numberRetreived = JSON.parse(localStorage.getItem("digit"))
    if (number === 0 && numberRetreived > 0) {
        numberRetreived += 1
        JSON.stringify(localStorage.setItem("digit", numberRetreived))
        counter.textContent = numberRetreived
    } else {
        counter.textContent = 1
        JSON.stringify(localStorage.setItem("digit", 1))
    }
    
    // TO RESET COUNTER ENABLE FOLLOWING CODE:
    //localStorage.removeItem("digit")    
    
    
})


