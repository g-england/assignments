import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Footer() {
    return (
        <ThemeContextConsumer>
        {({theme}) => (
            <footer className={`${theme}-theme`}>
                <p>(Your footer here.)</p>
            </footer>
        )}
        </ThemeContextConsumer>
    )
}

export default Footer