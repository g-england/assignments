import React, {useContext} from "react"
import {motion} from "framer-motion"
import { useHistory } from "react-router-dom"
import {AppContext} from "./appContext"

function Bill() {

    const {avgBill, billOnChange, billOnSubmit} = useContext(AppContext)
    const history = useHistory();
 

    return (
        <motion.div class="flex flex-row justify-center mt-24 p-10"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration: 1}}
        >
            <form onSubmit={(event) => billOnSubmit(event, history)} class="flex flex-col justify-center p-10">
                <input onChange={billOnChange} value={avgBill} placeholder="Average Monthly Power Bill:" type="number" class="p-1 border border-gray-400 rounded text-gray-500 bg-transparent" required/> <br />
                <input type="submit" value="next" class="p-1 border border-gray-400 rounded text-gray-500 bg-transparent"/>
            </form>
        </motion.div>
    )
}

export default Bill