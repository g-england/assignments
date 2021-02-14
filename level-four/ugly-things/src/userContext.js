import axios from "axios"
import React from "react"
const {Provider, Consumer} = React.createContext()



class UserContextProvider extends React.Component {
    state = {
        url: "",
        title: "",
        description: "",
        list: []
    }

    onChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    onSubmit = (stateObj, event) => {
        event.preventDefault()

        const currentList = this.state.list
        const apiPostObject = {
            title: stateObj.title,
            description: stateObj.description,
            imgUrl: stateObj.url
        }
        axios.post("https://api.vschool.io/garrettengland/thing", apiPostObject)
            .then(response => {
                const uniqueId = response.data._id

                const listItem = {
                    title: stateObj.title,
                    description: stateObj.description,
                    imgUrl: stateObj.url,
                    _id: uniqueId,
                    edit: false
                }

                const uglyThing = []
                uglyThing.push(listItem)
                const newList = [...currentList, ...uglyThing]

                this.setState({
                    url: "",
                    title: "",
                    description: "",
                    list: newList
                })
    
            })
    }

    onDelete = (itemId) => {
        console.log(itemId)
        const list = this.state.list
        const newList = list.filter((item) => item._id !== itemId)
        console.log(newList)
        this.setState({
            list: newList
        })
        axios.delete(`https://api.vschool.io/garrettengland/thing/${itemId}`)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    onEdit = (uniqueId) => {
        console.log(uniqueId)
        const list = this.state.list
        
        this.setState(prevState => {
            const editList = prevState.list.map(item => {
                if (item._id === uniqueId) {
                    item.edit = true
                }
                return item
            })
            return {
                list: editList
            }
        })
        console.log(this.state.list)
    }

    onEditChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        console.log(this.state.title)
        console.log(this.state.description)
    }

    onSave = (uniqueId, event) => {
        event.preventDefault()
        const {url, title, description} = this.state
        const putObj = {
            title: title,
            description: description,
        }
        this.setState(prevState => {
            const editList = prevState.list.map(item => {
                if (item._id === uniqueId) {
                    item.edit = false
                    item.title = title
                    item.description = description
                }
                return item
            })
            return {
                list: editList
            }
        })
        axios.put(`https://api.vschool.io/garrettengland/thing/${uniqueId}`, putObj)
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/garrettengland/thing/")
            .then(res => {
                const data = res.data
                console.log(data)
                const newData = data.map((item) => {
                    return item.edit = false
                })
                console.log(data)
                this.setState({
                    list: data
                })
            })
    }

    render() {
        console.log(this.state.list)
        const {list, title, description, url} = this.state
        return(
            <Provider value={{list, title, description, url, onSubmit: this.onSubmit, onChange: this.onChange,
            onDelete: this.onDelete, onEdit: this.onEdit, onSave: this.onSave, onEditChange: this.onEditChange}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}