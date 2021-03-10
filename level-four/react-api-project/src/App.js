import React from "react"
import {Switch, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home"
import Address from "./Address"
import System from "./System"
import About from "./About"
import Blog from "./Blog"
import Bill from "./Bill"
import Result from "./Result"


function App() {    

    return (
        <div class="relative min-h-screen bg-gradient-to-t from-green-300">
            {/* Content wrap div for allowing footer spacing at bottom */}
            <div class="pb-20"> 
                {/* other bg color option: from-green-400 only after "bg-gradient-to-t*/}
                <Navbar />
            
                    <Switch>
                        <Route path="/bill">
                            <Bill />
                        </Route>
                        <Route path="/address">
                            <Address />
                        </Route>
                        <Route path="/system">
                            <System />
                        </Route>
                        <Route path="/result">
                            <Result />
                        </Route>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/Blog">
                            <Blog />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>

            </div>
                <Footer />
        </div>
    )
}

export default App

