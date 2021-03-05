import React, {useState} from "react"
import axios from "axios"
const AppContext = React.createContext()


function AppContextProvider(props) {

    const API_KEY = process.env.REACT_APP_API_KEY



    const [form, setForm] = useState({
        format: "json",
        api_key: `${API_KEY}`,
        system_capacity: "",
        module_type: 0,
        losses: 14.08,
        array_type: "",
        tilt: 20,
        azimuth: "",
        address: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        if (value === "1" || value === "0") {
            setForm(prevFormData => {
               return {
                   ...prevFormData, 
                   [name]: Number(value)
                }
            }) 
        } else if (name === "azimuth") {
            setForm(prevFormData => {
                return {
                    ...prevFormData, 
                    [name]: Number(value)
                 }
             }) 
        } else {
            setForm(prevFormData => {
                return {
                    ...prevFormData, 
                    [name]: value
                 }
             }) 
        }
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        axios.get("https://developer.nrel.gov/api/pvwatts/v6.json?", {params: form})
        .then(res => {
            const data = res.data.outputs.ac_annual
            console.log(data)
        })
    }

    return (
        <AppContext.Provider value={{handleSubmit, setForm: handleChange, address: form.address, type: form.array_type, azimuth: form.azimuth, size: form.system_capacity, form}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}