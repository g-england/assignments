import React from "react"

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component {
    state = {
        theme: "dark"
    }

    onClick = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            } 
        })
    }

    render() {
        const {component: Component, ...props} = this.props
        const {theme} = this.state
        return (
            <Provider value={{theme, onClick: this.onClick}}>
                {this.props.children}
            </Provider>
        )
    }
}


export {ThemeContextProvider, Consumer as ThemeContextConsumer}


