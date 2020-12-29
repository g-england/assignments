import React from "react"

function Cards(props){
    let color = "white"
    if (props.spot.timeToGo === "Spring"){
        color = "#c3ffb3"
    } else if (props.spot.timeToGo === "Summer"){
        color = "#faffb3"
    } else if (props.spot.timeToGo === "Winter"){
        color = "#b0e9ff"
    } else if (props.spot.timeToGo === "Fall"){
        color = "#ffbf70"
    }


    let dollarSigns = "$"
    if (props.spot.price <= 500){
        dollarSigns = "$"
    } else if (props.spot.price > 500 && props.spot.price <= 1000){
        dollarSigns = "$$"
    } else if (props.spot.price > 1000){
        dollarSigns = "$$$"
    }

    return (
        <div className="cardDivs" style={{backgroundColor: color}}>
            <h3>{dollarSigns}</h3>
            <h2>{props.spot.place}</h2>
            <p>Price: {props.spot.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <p>Best time to visit: {props.spot.timeToGo}</p>
        </div>
    )
}

export default Cards