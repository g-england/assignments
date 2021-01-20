import React from "react"
import Form from "./Form"
import Badge from "./Badge"


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            about: "",
            badges: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const{name,value} = event.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault()
        const newBadge = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phone: this.state.phone,
            favoriteFood: this.state.favoriteFood,
            about: this.state.about
        }
        const badgeArray = this.state.badges
        const newArray = [...badgeArray, newBadge]
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            about: "",
            badges: newArray
        })
    }

    render() {
        const badgeComponent = this.state.badges.map(item => <Badge info={item}/>)
        return (
            <div>
                <Form info={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

                <div>
                    <hr></hr>
                </div>
                {badgeComponent}
            </div>
            
        )
    }
}

export default App
