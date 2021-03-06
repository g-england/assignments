import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
const AppContext = React.createContext()


function AppContextProvider(props) {

    const API_KEY = process.env.REACT_APP_API_KEY

    const [avgBill, setAvgBill] = useState("")
    const [usage, setUsage] = useState("")

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
    
    function handleSubmit(event, history) {
        event.preventDefault()
        if (history.location.pathname === "/system") {
            history.push("/result")
        }
        axios.get("https://developer.nrel.gov/api/pvwatts/v6.json?", {params: form})
        .then(res => {
            const data = res.data.outputs.ac_annual
            console.log(data)
        })
    }

    function billOnChange(event) {
        const {value} = event.target
        setAvgBill(value)
    }

    function billOnSubmit(event, history) {
        event.preventDefault()
        const usageTotal = (avgBill/.1331) * 12
        setUsage(usageTotal)
        history.push("/address");
    }

    console.log(usage)

    return (
        <AppContext.Provider value={{billOnSubmit, billOnChange, avgBill, handleSubmit, setForm: handleChange, address: form.address, type: form.array_type, azimuth: form.azimuth, size: form.system_capacity, form}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}