import React from "react"
import {motion} from "framer-motion"

function Footer() {
    return (
        <div class="flex flex-row justify-center items-center absolute h-10 bottom-0 w-full mt-10 text-gray-500 text-opacity-70">
            <motion.p class="flex-shrink"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
            >contact: garrett@lucintenergy.com</motion.p>
        </div>
    )
}

export default Footer