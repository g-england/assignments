import React from "react"

function RollButton(props){
    return (
        <div className="button-div">
            <button onClick={props.onClick}>Roll Dice!</button>
        </div>
        
    )
}

export default RollButton