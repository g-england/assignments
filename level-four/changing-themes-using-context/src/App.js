import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
import {withTheme} from "./themeContext"

class App extends React.Component {
    render() {
        return (
            <div className="page-container">
                <Navbar />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App