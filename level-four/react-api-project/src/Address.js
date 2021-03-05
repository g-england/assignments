import React, {useContext} from "react"
import {AppContext} from "./appContext"
import {useHistory} from "react-router-dom"

function Address() {
    const {setForm, address} = useContext(AppContext)
    const history = useHistory();
    function handleSubmit(event) {
        event.preventDefault()
        history.push("/system");
    }

    return (
        <div class="flex flex-row justify-center">
            <form onSubmit={handleSubmit} class="flex flex-col">
                <input 
                name="address"
                value={address}
                onChange={setForm} 
                placeholder="Address:" 
                class="p-1" 
                required
                /> <br />
                <input type="submit" value="next" class="self-center border border-gray-500 rounded p-0.5 text-gray-500 bg-gray-200"/>
            </form> <br />
        </div>
    )
}

export default Address