import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const itemComponent = props.data.map(item => <ListItem name={item.name} image={item.image}/>)
    return (
        <div className="list-div">
            {itemComponent}
        </div>
    )
}

export default List