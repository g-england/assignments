import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Navbar() {
    return (
        <ThemeContextConsumer>
            {({theme}) => (
                <ul className={`${theme}-theme`}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            )}
        </ThemeContextConsumer>
    )
}

export default Navbar