import React from "react"

function Navbar(){
    return (
        <div className="navDiv">
           
           <a href="www.vschool.io" className="startBootstrap">Start Bootstrap</a>
            <ul className="linkPosition">
                <li><a href="www.vschool.io">Home</a></li>
                <li><a href="www.vschool.io">About</a></li>
                <li><a href="www.vschool.io">Sample Post</a></li>
                <li><a href="www.vschool.io">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar