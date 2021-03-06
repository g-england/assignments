import React, {useState} from "react"
import axios from "axios"
const AppContext = React.createContext()


function AppContextProvider(props) {

    const API_KEY = process.env.REACT_APP_API_KEY

    const [avgBill, setAvgBill] = useState("")
    const [usage, setUsage] = useState("")
    const [production, setProduction] = useState("")
    const [actualNumbers, setActualNumbers] = useState({produces: "", uses: ""})

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
            const rounded = Math.round(data)
            setActualNumbers(prevNumbers => {
                return {
                    ...prevNumbers,
                    produces: data
                }
            })
            const formatted = new Intl.NumberFormat().format(rounded);
            setProduction(formatted)
        })
    }

    function billOnChange(event) {
        const {value} = event.target
        setAvgBill(value)
    }

    function billOnSubmit(event, history) {
        event.preventDefault()
        const usageTotal = (avgBill/.1331) * 12
        const rounded = Math.round(usageTotal)
        setActualNumbers(prevNumbers => {
            return {
                ...prevNumbers,
                uses: rounded
            }
        })
        const formatted = new Intl.NumberFormat().format(rounded);
        setUsage(formatted)
        history.push("/address");
    }

    function newQuote(history) {
        setAvgBill("")
        setForm({
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
        history.push("/bill")
    }
    
    return (
        <AppContext.Provider value={{actualNumbers, usage, production, billOnSubmit, billOnChange, avgBill, handleSubmit, setForm: handleChange, address: form.address, type: form.array_type, 
                             azimuth: form.azimuth, size: form.system_capacity, form, newQuote}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}