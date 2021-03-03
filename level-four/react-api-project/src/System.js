import React from "react"
import {useHistory} from "react-router-dom"

function System() {
    const history = useHistory();


    return (
        <div class="flex flex-col place-items-center mt-40">
            <h1>System Info:</h1>
            <form class="flex flex-col">
                <input type="number" placeholder="System Size (kW):" class="m-1 p-1"/>
                {/* <input placeholder="Sytem Type:" class="m-1 p-1"/> */}
                <select>
                    <option>Roof Mount</option>
                    <option>Ground Mount</option>
                </select>
                {/* <input placeholder="Direction:" class="m-1 p-1"/> */}
                <select>
                    <option>North</option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
                <input type="submit" value="Verify!" class="self-center p-1"/>
            </form>
        </div>
    )
}

export default System