import React from "react"

function Badge(props) {
    return (
        <div className="badge-wrapper">
            <div className="badge-div-one">Badge:</div>
            <div className="badge-div-two">
                <div><p>Name: {props.info.firstName} {props.info.lastName}</p></div>
                <div><p>Phone: {props.info.phone}</p></div>
                <div><p>Place of birth: {props.info.placeOfBirth}</p></div>
                <div><p>Favorite food: {props.info.favoriteFood}</p></div>
                <div><p>Email: {props.info.email}</p></div>
            </div>
            <div className="badge-div-three">
                <div className="badge-text-area">{props.info.about}</div>
            </div>
        </div>
    )
}

export default Badge