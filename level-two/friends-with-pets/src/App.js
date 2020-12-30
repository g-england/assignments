import React from "react"
import FriendList from "./components/FriendList"
import friendsData from "./friendsData"

function App(){

    return (
        <div>
            <FriendList data={friendsData}/>
        </div>
    )
}

export default App