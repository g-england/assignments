import React from "react"
import Friend from "../components/Friend"



function FriendList(props){

    const friendComponent = props.data.map(friend => <Friend name={friend.name} age={friend.age} pets={friend.pets}/>)

    return (
        <div>
            {friendComponent}
        </div>
    )
}

export default FriendList