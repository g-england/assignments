import React, {useContext} from "react"
import {useHistory} from "react-router-dom"
import {AppContext} from "./appContext"
import {motion} from "framer-motion"
import UnderProduction from "./UnderProduction"
import OverProduction from "./OverProduction"

function Result() {
    const history = useHistory()
    const {usage, production, actualNumbers, newQuote} = useContext(AppContext)
    const yourUsage = `Your yearly usage:`

    const buttonVariants = {
        hover: {
            scale: 1.1,
            duration: 5
        }
    }

    return (
        <div class="flex flex-row justify-center pb-32">
        <motion.div class="flex flex-col justify-center h-90 max-w-sm mt-16 mr-5 ml-5 pt-10 pl-5 pr-5 pb-10 text-gray-500 border border-gray-400 rounded"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration: 1}}
        >
            <h1 class="text-gray-500 self-center text-xl mb-5 border-b border-gray-400">The Breakdown:</h1>

            <p class="self-center">{yourUsage}</p>
            <p class="text-center">{`${usage} kWh`}</p>
            <br />
            <p class="text-center">{`Your quoted system's yearly production:`}</p>
            <p class="text-center">{`${production} kWh`}</p>
            <br />
            {actualNumbers.produces >= actualNumbers.uses ? <p class="text-center">- Congratulations! -</p> : null}
            {actualNumbers.produces >= actualNumbers.uses ? <OverProduction /> : <UnderProduction />}
            <br />
            <motion.button onClick={() => newQuote(history)} class="self-center p-1 border border-gray-400 rounded text-gray-500 bg-transparent w-50"
                variants={buttonVariants}
                whileHover="hover"
            >Verify another quote!</motion.button>
        </motion.div>
        </div>
    )
}

export default Result