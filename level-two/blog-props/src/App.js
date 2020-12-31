import React from "react"
import Header from "./Header"
import BlogList from "./BlogList"
import Button from "./Button"
import Footer from "./Footer"

function App(){
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="blog-list-div">
                <BlogList />
            </div>
            <div className="button-div">
                <Button />
            </div>
            <div>
                <Footer />
            </div>
        </div>
        
    )
}

export default App