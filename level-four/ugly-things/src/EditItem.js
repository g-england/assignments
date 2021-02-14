import React from "react"
import {UserContextConsumer} from "./userContext"
function EditItem(props) {
    return(
        <UserContextConsumer>
            {({onSave, onEditChange}) => (
                <div>
                    <input onChange={onEditChange} name="title" placeholder="Title"/> 
                    <input onChange={onEditChange} name="description"  placeholder="Description"/> 
                    <button onClick={(event) => onSave(props.id, event)}>Save</button>
                </div>
            )}
        </UserContextConsumer>
    )
}

export default EditItem