import React from "react"
import {Switch, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home"
import Address from "./Address"
import System from "./System"
import About from "./About"
import Blog from "./Blog"


function App() {    

    return (
        <div class="relative min-h-screen bg-gradient-to-t from-transparent via-green-200 to-transparent"> 
            {/* other bg color option: from-green-400 only after "bg-gradient-to-t*/}
            <Navbar />
           
                <Switch>
                    <Route exact path="/">
                        <Home />
                        <Address />
                    </Route>
                    <Route path="/system">
                        <System />
                    </Route>
                    <Route path="/About">
                        <About />
                    </Route>
                    <Route path="/Blog">
                        <Blog />
                    </Route>
                </Switch>
        

            <Footer />
        </div>
    )
}

export default App

