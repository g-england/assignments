import React from "react"

function Die(props) {
    return (
        <div onClick={() => props.handleDiceClick(props.item.id)} style={{backgroundColor: props.item.color}} className="die-div">{props.item.number}</div>
    )
}

export default Die