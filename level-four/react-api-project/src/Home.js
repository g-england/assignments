import React from "react"
import {useHistory} from "react-router-dom"
import {motion} from "framer-motion"

function Home() {

    const containerVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    const buttonVariants = {
        hover: {
            scale: 1.1,
            duration: 5
        }
    }

    const history = useHistory();
    function handleSubmit(event) {
        event.preventDefault()
        history.push("/bill");
    }

    return (
        <motion.div class="flex flex-col place-items-center mt-5"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            transition={{delay: 0.5, duration: 1.5}}
        >
            <div class="p-5 sm:p-10">
                <h1 class="text-xl md:text-2xl text-gray-500 text-opacity-90">Sometimes you need a second opinion...</h1>
                <h1 class="text-xl md:text-2xl text-gray-500 text-opacity-90">buying solar is one of those times.</h1>
                <p class="text-gray-500 text-opacity-90">Make sure your quote is accurate in just a few quick steps!</p>
            </div>
            <br></br>
            
            <motion.button onClick={handleSubmit} class="p-1 border border-gray-400  max-w-xs rounded text-gray-500 bg-transparent"
                variants={buttonVariants}
                whileHover="hover"
            >Get started!</motion.button>

            <div class="mt-32 sm:mt-40 md:mt-44 opacity-90 sm:opacity-60 md:opacity-50">
                <img src={"/assets/images/house.png"}></img>
            </div>
    
        </motion.div>
    )
}

export default Home