import React from "react"
import List from "./List"
import axios from "axios"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
                .then((response) => {
                    console.log(response.data)
                    this.setState({
                        list: response.data,
                        loading: false
                    })
                })
    }

    render() {
        const whileLoading = this.state.loading ? "Loading..." : "Don Corleone's Hit List"
        return (
            <div>
                <h1>{whileLoading}</h1>
                <List data={this.state.list}/>
            </div>
        )
    }
}

export default App