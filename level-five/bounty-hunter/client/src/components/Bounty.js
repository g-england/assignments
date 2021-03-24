import React, {useState, useEffect} from 'react'
import AddBountyForm from './AddBountyForm.js'

function Bounty(props) {
    const {firstName, lastName, bountyAmount, living, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    
    useEffect(() => {
        setEditToggle(false)
    }, [props.bounties])

    return(
        <div className="bounty">
            { !editToggle ?
            <> 
            {/* React Fragment */}
                <h1>{firstName} {lastName}</h1>
                <h2>{type}</h2>
                <p>{`Price: $${bountyAmount}`}</p>
                <h3>{living ? null: "Terminated!"}</h3>
                <button
                    onClick={() => props.deleteBounty(_id)}>
                    Delete
                </button>
                <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                >Edit</button>
            </>
            :
            <>
                <AddBountyForm 
                    firstName={firstName}
                    lastName={lastName}
                    bountyAmount={bountyAmount}
                    type={type}
                    id={_id}
                    btnText="Submit"
                    submit={props.editBounty}
                    toggle={setEditToggle}
                />
                <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                >Close</button>
            </>
            }
        </div>
    )
}

export default Bounty