import React, {useContext} from "react"
import {AppContext} from "./appContext"
import {useHistory} from "react-router-dom"
import {motion} from "framer-motion"

function Address() {
    const {setForm, address} = useContext(AppContext)
    const history = useHistory();
    function handleSubmit(event) {
        event.preventDefault()
        history.push("/system");
    }

    return (
        <motion.div class="flex flex-row justify-center mt-36 p-10"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.5, duration: 1}}
        >
            <form onSubmit={handleSubmit} class="flex flex-col">
                <input 
                name="address"
                value={address}
                onChange={setForm} 
                placeholder="Address:" 
                class="p-1 border border-gray-400 rounded text-gray-500 bg-transparent"
                required
                /> <br />
                <input type="submit" value="next" class="p-1 border border-gray-400 rounded text-gray-500 bg-transparent"/>
            </form> <br />
        </motion.div>
    )
}

export default Address