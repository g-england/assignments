import React, {useContext} from "react"
import {AppContext} from "./appContext"
import {useHistory} from "react-router-dom"
import {motion} from "framer-motion"

function System() {
    const history = useHistory();
    const {handleSubmit, setForm, type, azimuth, size} = useContext(AppContext)
 
    const buttonVariants = {
        hover: {
            scale: 1.1,
            duration: 5
        }
    }

    return (
        <motion.div class="flex flex-col place-items-center mt-40"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        >
            <h1 class="text-gray-500">3. To finish up, a few bits of information from your quoted system</h1>
            <h1 class="text-gray-500">will give us a complete picture.</h1>
            
            <form onSubmit={(event) => handleSubmit(event, history)} class="flex flex-col p-10">
                <input 
                onChange={setForm}
                value={size}
                name="system_capacity"
                type="number" 
                placeholder="System Size (kW):" 
                class="mb-3 p-1 border border-gray-400 rounded text-gray-400 bg-transparent"
                required
                />

                <select
                    value={type}
                    name="array_type"
                    onChange={setForm}
                    class="mb-3 p-1 border border-gray-400 rounded text-gray-400 bg-transparent"
                    required
                >   
                    <option value="">System Type:</option>
                    <option value="1">Roof Mount</option>
                    <option value="0">Ground Mount</option>
                </select>
         
                <select
                    onChange={setForm}
                    name="azimuth"
                    value={azimuth}
                    class="mb-3 p-1 border border-gray-400 rounded text-gray-400 bg-transparent"
                    required
                >
                    <option value="">System is facing:</option>
                    <option value="0">North</option>
                    <option value="45">North East</option>
                    <option value="90">East</option>
                    <option value="135">South East</option>
                    <option value="180">South</option>
                    <option value="225">South West</option>
                    <option value="270">West</option>
                    <option value="315">North West</option>
                </select>
                <motion.input type="submit" value="Verify!" class="self-center p-1 border border-gray-400 rounded text-gray-500 bg-transparent w-32"
                    variants={buttonVariants}
                    whileHover="hover"
                />
            </form>
        </motion.div>
    )
}

export default System