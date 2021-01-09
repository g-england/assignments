import React from "react"

function Die(props) {
    return (
        <div onClick={props.onClick} style={{backgroundColor: props.color}} className="die-div">{props.number}</div>
    )
}

export default Die