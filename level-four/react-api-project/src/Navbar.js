import React from "react"
import {Link} from "react-router-dom"
import { motion } from "framer-motion"

function Navbar() {
    return (
        <motion.div class="flex flex-row justify-end p-3 text-gray-500"
            initial={{y:-100}}
            animate={{y: 0}}
            transition={{duration: 1}}
        >
            <ul>
                <li class="inline p-1"><Link to="/">Home</Link></li>
                <li class="inline p-1"><Link to="/about">About</Link></li>
                <li class="inline p-1"><Link to="/blog">Blog</Link></li>
            </ul>
        </motion.div>
    )
}

export default Navbar