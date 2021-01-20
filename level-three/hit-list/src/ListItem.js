import React from "react"

function ListItem({name, image}) {
    return(
        <div className="list-item">
            <h2>- {name} -</h2>
            <img src={image} alt=""/>
        </div>
    )
}

export default ListItem