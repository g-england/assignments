import React, {useContext} from "react"
import {AppContext} from "./appContext"
import {useHistory} from "react-router-dom"

function System() {
    const history = useHistory();
    const {handleSubmit, setForm, type, azimuth, size} = useContext(AppContext)
 
    return (
        <div class="flex flex-col place-items-center mt-40">
            <h1>System Info:</h1>
            <form onSubmit={handleSubmit} class="flex flex-col">
                <input 
                onChange={setForm}
                value={size}
                name="system_capacity"
                type="number" 
                placeholder="System Size (kW):" 
                class="m-1 p-1"
                />
        
                <select
                    value={type}
                    name="array_type"
                    onChange={setForm}
                >   
                    <option>System Type</option>
                    <option value="1">Roof Mount</option>
                    <option value={0}>Ground Mount</option>
                </select>
         
                <select
                    onChange={setForm}
                    name="azimuth"
                    value={azimuth}
                >
                    <option value="">Select a direction</option>
                    <option value="0">North</option>
                    <option value="45">North East</option>
                    <option value="90">East</option>
                    <option value="135">South East</option>
                    <option value="180">South</option>
                    <option value="225">South West</option>
                    <option value="270">West</option>
                    <option value="315">North West</option>
                </select>
                <input type="submit" value="Verify!" class="self-center p-1"/>
            </form>
        </div>
    )
}

export default System