import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div class="flex flex-row justify-end p-3 text-gray-500">
            <ul>
                <li class="inline p-1"><Link to="/">Home</Link></li>
                <li class="inline p-1"><Link to="/about">About</Link></li>
                <li class="inline p-1"><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    )
}

export default Navbar