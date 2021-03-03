import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"
import {CSSTransition, TransitionGroup} from "react-transition-group"
import axios from "axios"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home"
import Address from "./Address"
import System from "./System"
import About from "./About"
import Blog from "./Blog"

function App() {
    const [data, setData] = useState()

    function getData(data) {
        setData(data)
    }

    const homeData = {
        format: "json",
        api_key: "wKbnuzUndkDgJGHlP7nEg28g6RDukrl0chjlND5U",
        system_capacity: "9",
        module_type: 0,
        losses: 14,
        array_type: 1,
        tilt: 20,
        azimuth: 180,
        address: "3046 Evergreen Ave, SLC, UT"
    }
    
    // useEffect(() => {
    //     axios.get("https://developer.nrel.gov/api/pvwatts/v6.json?", {params: homeData})
    //         .then(res => {
    //             const data = res.data.outputs.ac_annual
    //             getData(data) 
    //         })

    // }, [])


    return (
        <div class="relative min-h-screen bg-gradient-to-t from-green-400">
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

