import React from "react"
import {motion} from "framer-motion"

function About() {
    return (
        <div class="flex flex-row justify-center pb-32">
        <motion.div class="flex flex-col justify-center h-90 max-w-sm mt-16 mr-5 ml-5 pt-10 pl-5 pr-5 pb-10 text-gray-500 border border-gray-400 rounded"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1.5}}
        >
            <h1 class="text-gray-500 self-center text-xl mb-5 border-b border-gray-400">About</h1>
            <p>This app was created out of a desire to bring more transparency to the solar buying process.
                Solar systems are complex and are could be more difficult to understand than many of your other home purchases. </p>
            <p>Often, going solar is avoided  completely because buyers don't have enough information.</p>
            <p>Utilizing advanced solar technology and data, this app aims to shed some light on the solar buyer's journey. We hope you find it helpful. </p>
        </motion.div>
        </div>
    )
}

export default About