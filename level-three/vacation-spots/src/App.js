import React from "react"
import Cards from "./Cards"
import Spots from "./vacationSpots"

function App(){
    const cardComponents = Spots.map(item => <Cards spot={item}/>)


    return (
        <div>
            {cardComponents}
        </div>
    )
}

export default App
