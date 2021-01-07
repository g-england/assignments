import React from "react"
import Square from "./Square"
import ButtonDiv from "./ButtonDiv"
import ButtonDiv2 from "./ButtonDiv2"

class App extends React.Component {
    constructor() {
        super();
        this.handleDjSmall = this.handleDjSmall.bind(this);
        this.handlePartyDj = this.handlePartyDj.bind(this);
        this.handleProDjLeft = this.handleProDjLeft.bind(this);
        this.handleProDjRight = this.handleProDjRight.bind(this);
        this.handleBigDjOne = this.handleBigDjOne.bind(this);
        this.handleBigDjTwo = this.handleBigDjTwo.bind(this);
        this.handleBigDjThree = this.handleBigDjThree.bind(this);
        this.handleBigDjFour = this.handleBigDjFour.bind(this);
        this.state = {
            colors: ["white", "white", "white", "black"]
        }
    }

    handleDjSmall() {
        this.setState(prevState => {
            if (this.state.colors[0] === "white") {
                return {
                    colors: ["black", "black", "black", "black"]
                }
            } else if (this.state.colors[0] === "black") {
                return {
                    colors: ["white", "white", "white", "white"]
                }
            } else if (this.state.colors[0] !== "white" && this.state.colors[0] !== "black") {
                return {
                    colors: ["white", "white", "white", "white"]
                }
            }
        })
    }
    
    handlePartyDj() {
        this.setState(prevState => {
            const purple = prevState.colors.splice(0, 2, "purple", "purple");
            return {
                purple
            }
        })
    }

    handleProDjLeft() {
        this.setState(prevState => {
            const blueLeft = prevState.colors.splice(2, 1, "blue");
            return {
                blueLeft
            }
        })
    }

    handleProDjRight() {
        this.setState(prevState => {
            const blueRight = prevState.colors.splice(3, 1, "blue");
            return {
                blueRight
            }
        })
    }

    handleBigDjOne() {
        this.setState(prevState => {
            const topLeft = prevState.colors.splice(0, 1, "#4287f5");
            return {
                topLeft
            }
        })
    }

    handleBigDjTwo() {
        this.setState(prevState => {
            const topRight = prevState.colors.splice(1, 1, "#42f5c5");
            return {
                topRight
            }
        })
    }

    handleBigDjThree() {
        this.setState(prevState => {
            const bottomLeft = prevState.colors.splice(2, 1, "#6cf542");
            return {
                bottomLeft
            }
        })
    }

    handleBigDjFour() {
        this.setState(prevState => {
            const bottomRight = prevState.colors.splice(3, 1, "#ad42f5");
            return {
                bottomRight
            }
        })
    }

    render() {
        const squareComponent = this.state.colors.map(item => <Square color={item}/>)
        return (
            <div>
                <div className="container-div">
                    {squareComponent}
                </div>

                <hr></hr>
                
                <ButtonDiv onDjSmallClick={this.handleDjSmall} onPartyDjClick={this.handlePartyDj} 
                onProDjLeftClick={this.handleProDjLeft} onProDjRightClick={this.handleProDjRight}/>

                <ButtonDiv2 onBigDjOneClick={this.handleBigDjOne} onBigDjTwoClick={this.handleBigDjTwo}
                onBigDjThreeClick={this.handleBigDjThree} onBigDjFourClick={this.handleBigDjFour}/>
            </div>
        )
    }
}

export default App
