import React from 'react'

function Filter(props){
    return (
        <div>
            <h4>Filter by Type</h4>
            <select onChange={props.handleFilter}>
                <option value="default">All Bounties</option>
                <option value="Jedi">Jedi</option>
                <option value="Sith">Sith</option>
            </select>
        </div>
    )
}

export default Filter