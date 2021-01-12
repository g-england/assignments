import React from "react"
import ListItem from "./ListItem"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
            names: [],
            id: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value 
        })
    }

    handleSubmit(event) {
        this.setState(prevState => {
            event.preventDefault()
            let value = this.state.input
            const prevList = this.state.names
            prevList.push(value)
            console.log(this.state.names)
        
            return (
                {
                    input: "",
                    names: prevList
                }
            )
        })
    }

    render() {
        const listComponent = this.state.names.map(name => <ListItem name={name}/>)
        return (
            <div>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <input onChange={this.handleChange} placeholder="Enter a name:" value={this.state.input} name="input"></input>
                    <button>Add Name</button>
                </form>
                <h1>{this.state.input}</h1>
                <ul>
                    {listComponent}
                </ul>
            </div>
        )
    }
}

export default App
