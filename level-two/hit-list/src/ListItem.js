import React from "react"

function ListItem(props) {
    return(
        <div className="list-item">
            <h2>- {props.name} -</h2>
            <img src={props.image} alt=""/>
        </div>
    )
}

export default ListItem