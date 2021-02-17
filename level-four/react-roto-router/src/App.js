import React from "react"

import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Footer from "./Footer"
import {Switch, Route} from "react-router-dom"

function App() {
    return (
        <div className="page-container">
            <Navbar />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
            </Switch>

            <Footer />
        </div>
    )
}

export default App