import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Main() {
    return (
        <ThemeContextConsumer>
            {({theme, onClick}) => (
            <main>
                <h1>{`You are currently using the ${theme} theme.`}</h1>
                <button onClick={onClick} className={`${theme}-theme`}>Change Theme</button>
            </main>
            )}
        </ThemeContextConsumer>    
    )
}

export default Main