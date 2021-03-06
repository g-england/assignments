import React from "react"
import {motion} from "framer-motion"

function Blog() {
    return (
        <div>
            <motion.p class="text-5xl mt-28 text-gray-500 text-center text-opacity-60"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5}}
            >Coming Soon!</motion.p>
        </div>
    )
}

export default Blog