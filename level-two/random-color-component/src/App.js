import React from "react"
import axios from "axios"



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "",
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(response => {
                this.setState({
                    color: response.data.new_color
                })
                console.log(this.state.color)
            })
    }

    render() {
        const divStyle = {
            backgroundColor: `#${this.state.color}`
        }
        return(
            <div className="color-div" style={divStyle}>
                <button onClick={this.handleClick}>New Color</button>
            </div>
        )
    }
}

export default App