import React from "react"
import Pet from "../components/Pet"

function Friend(props){

    const petComponent = props.pets.map(pet => <Pet name={pet.name} breed={pet.breed}/>)

    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            Pets: {petComponent}
            <hr style={{marginRight: "80%"}}/>
        </div>
    )
}

export default Friend