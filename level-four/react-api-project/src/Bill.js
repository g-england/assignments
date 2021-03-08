import React, {useContext} from "react"
import {motion} from "framer-motion"
import { useHistory } from "react-router-dom"
import {AppContext} from "./appContext"

function Bill() {

    const {avgBill, billOnChange, billOnSubmit} = useContext(AppContext)
    const history = useHistory();
 
    const buttonVariants = {
        hover: {
            scale: 1.1,
            duration: 5
        }
    }

    return (
        <motion.div class="flex flex-col place-items-center mt-24 p-10"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
        >
            <h1 class="text-gray-500">Step 1 - First we need figure out how much you spend a month on power.</h1>
            <h1 class="text-gray-500">Give us your best estimate, the more precise the better.</h1>
            <form onSubmit={(event) => billOnSubmit(event, history)} class="flex flex-col place-items-center p-10">
                <input onChange={billOnChange} value={avgBill} placeholder="Average Monthly Power Bill:" type="number" 
                class="p-1 border border-gray-400 rounded text-gray-500 bg-transparent w-60" required/> 
                
                <br />

                <motion.input type="submit" value="next" class="p-1 border border-gray-400 rounded text-gray-500 bg-transparent w-32"
                    variants={buttonVariants}
                    whileHover="hover"
                />
            </form>
        </motion.div>
    )
}

export default Bill