import React from "react"
import {UserContextConsumer} from "./userContext"
import EditItem from './EditItem'

function Item(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.url}></img>
            <p>{props.description}</p>

            <button onClick={() => {props.onDelete(props.id)}}>Delete</button>
            <button onClick={() => {props.onEdit(props.id)}}>Edit</button>
            <div>
                {
                    props.edit === true ? <EditItem id={props.id}/> : null
                }
            </div>
            <hr />
        </div>
    )
}

export default Item