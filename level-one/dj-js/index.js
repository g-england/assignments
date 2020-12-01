
//Blue
square.addEventListener('mouseover', function() {
    document.getElementById("square").style.backgroundColor = "blue";
})

document.getElementById("square").addEventListener('mouseout', function() {
    document.getElementById("square").style.backgroundColor = "white";
})

document.addEventListener("keydown", function(event) {
    if (event.key == "b") {
        document.getElementById("square").style.backgroundColor = "blue";
    }
})

//Red
document.getElementById("square").addEventListener('mousedown', function() {
    document.getElementById("square").style.backgroundColor = "red";
})

document.addEventListener("keydown", function(event) {
    if (event.key == "r") {
        document.getElementById("square").style.backgroundColor = "red";
    }
})



//Yellow
document.getElementById("square").addEventListener('mouseup', function() {
    document.getElementById("square").style.backgroundColor = "yellow";
})

document.addEventListener("keydown", function(event) {
    if (event.key == "y") {
        document.getElementById("square").style.backgroundColor = "yellow";
    }
})

//Green
document.getElementById("square").addEventListener('dblclick', function() {
    document.getElementById("square").style.backgroundColor = "green";
})

document.addEventListener("keydown", function(event) {
    if (event.key == "g") {
        document.getElementById("square").style.backgroundColor = "green";
    }
})

//Orange
document.body.addEventListener('wheel', function() {
    document.getElementById("square").style.backgroundColor = "orange";
})

document.addEventListener("keydown", function(event) {
    if (event.key == "o") {
        document.getElementById("square").style.backgroundColor = "orange";
    }
})