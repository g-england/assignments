import React from "react"
import {motion} from "framer-motion"

function Result() {
    return (
        <div class="flex flex-row justify-center">
            <motion.button class="mt-52 p-1 border border-gray-400 rounded text-gray-500 bg-transparent"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5, duration: 1}}
            >Result</motion.button>
        </div>
    )
}

export default Result