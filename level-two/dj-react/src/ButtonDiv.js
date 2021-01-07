import React from "react"
import DjSmall from "./buttons/DjSmall"
import PartyDj from "./buttons/PartyDj"
import ProDjLeft from "./buttons/ProDjLeft"
import ProDjRight from "./buttons/ProDjRight"

function ButtonDiv(props) {
    return (
        <div className="button-div">
            <DjSmall onClick={props.onDjSmallClick}/>
            <PartyDj onClick={props.onPartyDjClick}/>
            <ProDjLeft onClick={props.onProDjLeftClick}/>
            <ProDjRight onClick={props.onProDjRightClick}/>
        </div>
    )
}

export default ButtonDiv