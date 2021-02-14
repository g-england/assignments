import React from "react"
import Item from "./Item"
import {UserContextConsumer} from "./userContext"

function List() {
    return (
        <UserContextConsumer>
            {({list, onDelete, onEdit, onSave, onEditChange, title, description}) => {
                const itemComponent = list.map(item => <Item key={item._id} edit={item.edit} id={item._id} 
                url={item.imgUrl} description={item.description} title={item.title} onDelete={onDelete} onEdit={onEdit} onsave={onSave} 
                onEditChange={onEditChange} editTitle={title} editDescription={description}/>)
                return itemComponent
            }}
        </UserContextConsumer>
    )
}

export default List