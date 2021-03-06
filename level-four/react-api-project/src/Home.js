import React from "react"
import {useHistory} from "react-router-dom"
import {motion} from "framer-motion"

function Home() {

    const history = useHistory();
    function handleSubmit(event) {
        event.preventDefault()
        history.push("/bill");
    }

    return (
        <div class="flex flex-row justify-center mt-32 p-10">
            <motion.button onClick={handleSubmit} class="p-1 border border-gray-400 rounded text-gray-500 bg-transparent"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5, duration: 1.5}}
            >Get verified!</motion.button>
        </div>
    )
}

export default Home