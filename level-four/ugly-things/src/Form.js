import React from "react"
import {UserContextConsumer} from "./userContext"

function Form(props) {
    return (
        <UserContextConsumer>
            {({onSubmit, onChange, url, description, title}) => (
        <form onSubmit={(event) => {
            onSubmit(props.state, event)
            props.onSubmit()
            }}>
            <input
            onChange={props.onChange}
            type="text"
            placeholder="Img URL"
            name="url"
            value={props.state.url}
            required
            />

            <input
            onChange={props.onChange}
            type="text"
            placeholder="Title"
            name="title"
            value={props.state.title}     
            required   
            />

            <input
            onChange={props.onChange}
            type="text"
            placeholder="Description"
            name="description"
            value={props.state.description}
            required
            />

            <input type="submit" value="Submit" />
        </form>
            )}
        </UserContextConsumer>
    )
}

export default Form