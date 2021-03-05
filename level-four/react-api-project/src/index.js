import React from "react"
import ReactDOM from "react-dom"
import {AppContextProvider} from "./appContext"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./App"
import './index.css'

ReactDOM.render(
<Router>
    <AppContextProvider>
        <App />
    </AppContextProvider>
</Router>, document.getElementById("root"))