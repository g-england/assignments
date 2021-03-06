import React, {useContext} from "react"
import {AppContext} from "./appContext"
import {useHistory} from "react-router-dom"
import {motion} from "framer-motion"

function Address() {
    const {setForm, address} = useContext(AppContext)
    const history = useHistory();
    function handleSubmit(event) {
        event.preventDefault()
        history.push("/system");
    }

    const buttonVariants = {
        hover: {
            scale: 1.1,
            duration: 5
        }
    }

    return (
        <div>
            <motion.div class="flex flex-col place-items-center mt-5 p-10"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration: 1}}
            >
                <h1 class="text-gray-500 text-center">Step 2 - With your location, we can calculate how much sun exposure your home gets each year.</h1>
                <h1 class="text-gray-500">Pretty cool right?</h1>
                <form onSubmit={handleSubmit} class="flex flex-col place-items-center p-10">
                    <input 
                        name="address"
                        value={address}
                        onChange={setForm} 
                        placeholder="Address:" 
                        class="p-1 border border-gray-400 rounded text-gray-500 bg-transparent"
                        required
                    /> 
                    <br />

                    <motion.input type="submit" value="next" class="p-1 border border-gray-400 rounded text-gray-500 bg-transparent w-32"
                        variants={buttonVariants}
                        whileHover="hover"
                    />
                </form> 
            </motion.div>
            <div className="autofill" class="mt-5 sm:mt-24 opacity-90 sm:opacity-60 md:opacity-50">
                <img src={"/assets/images/house.png"}></img>
            </div>
        </div>
    )
}

export default Address