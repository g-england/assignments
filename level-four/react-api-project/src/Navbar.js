import React from "react"
import {Link, NavLink} from "react-router-dom"
import { motion } from "framer-motion"

function Navbar() {
    return (
        <motion.div class="flex flex-row justify-end p-3 text-gray-500"
            initial={{y:-100}}
            animate={{y: 0}}
            transition={{duration: 1}}
        >
           
                <NavLink exact to="/" activeStyle={{textDecoration: "underline"}}>Home</NavLink>
                <NavLink to="/about" activeStyle={{textDecoration: "underline"}}>About</NavLink>
                <NavLink to="/blog" activeStyle={{textDecoration: "underline"}}>Blog</NavLink>
            
        </motion.div>
    )
}

export default Navbar