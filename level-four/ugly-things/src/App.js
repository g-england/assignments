import React from "react"
import Form from "./Form"
import List from "./List"

class App extends React.Component {
    state = {
        url: "",
        title: "",
        description: ""
    }

    onChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    onSubmit = () => {
        this.setState({
            url: "",
            title: "",
            description: ""
        })
    }

    componentDidMount() {
        console.log("App")
    }

    render() {
        const state = this.state
        const {url, title, description} = this.state
        return (
            <div>
                <Form state={this.state} onChange={this.onChange} onSubmit={this.onSubmit}/>
                <hr/>
                <List />
            </div>
        )
    }
}

export default App