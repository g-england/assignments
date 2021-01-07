import React from "react"
import BigDjOne from "./buttons/BigDjOne"
import BigDjTwo from "./buttons/BigDjTwo"
import BigDjThree from "./buttons/BigDjThree"
import BigDjFour from "./buttons/BigDjFour"

function ButtonDiv2(props) {
    return (
        <div className="button-div-two">
            <BigDjOne onClick={props.onBigDjOneClick}/>
            <BigDjTwo onClick={props.onBigDjTwoClick}/>
            <BigDjThree onClick={props.onBigDjThreeClick}/>
            <BigDjFour onClick={props.onBigDjFourClick}/>
        </div>
    )
}

export default ButtonDiv2