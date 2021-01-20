import React from "react"

function RollButton(props){
    return (
        <div className="button-div">
            <button onClick={props.handleDiceRoll}>Roll Dice!</button>
        </div>
        
    )
}

export default RollButton