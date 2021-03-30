import React, {useState} from 'react'

function AddBountyForm(props) {
    const initInputs = { firstName: props.firstName || "", lastName: props.lastName || "", allegiance: props.allegiance || "", bountyAmount: props.bountyAmount || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props.id)
        // Because App.js wasn't re-rendering I tried using this solution below to hide edit menu
        // This caused a slight delay in the update and user could see glitch
        // This was fixed with a useEffect hook in Bounty.js that waits for state change of "bounties" in App.js
        // Previous Solution:
        // props.toggle(prevToggle => !prevToggle)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
            placeholder="First Name"
            />
            <input 
            type="text"
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            />
            <input 
            type="text"
            name="allegiance"
            value={inputs.allegiance}
            onChange={handleChange}
            placeholder="Allegiance"
            />
            <input 
            type="text"
            name="bountyAmount"
            value={inputs.bountyAmount}
            onChange={handleChange}
            placeholder="Value"
            />
            <button>{props.btnText}</button>
        </form>
    )
}

export default AddBountyForm