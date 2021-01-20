import React from "react"
import Navbar from "./Navbar"

function Header(){
    return (
            <div>
                <header>
                    <div className="headerOverlay">
                        <Navbar />
                        <h1 className="header-h1">Clean Blog</h1>
                        <h3 className="header-h3">A Blog Theme by Start Bootstrap</h3>
                    </div>
                    
                </header>
            </div>    
    )
}

export default Header