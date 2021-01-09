import React from "react"
import Die from "./Die"
import RollButton from "./RollButton"

const diceData = [
    {
        id: 1,
        number: 0,
        color: "white"
    },
    {
        id: 2,
        number: 0,
        color: "white"
    },
    {
        id: 3,
        number: 0,
        color: "white"
    },
    {
        id: 4,
        number: 0,
        color: "white"
    },
    {
        id: 5,
        number: 0,
        color: "white"
    }
]

let rollCount = 0;

class DiceBox extends React.Component {
    constructor() {
        super();
        this.handleDiceRoll = this.handleDiceRoll.bind(this);
        this.handleDiceClick = this.handleDiceClick.bind(this);
        this.state = {
            dice: diceData
        }
    }

    handleDiceRoll() {
        rollCount += 1
        console.log(rollCount)
        this.setState(prevState => {
            if (rollCount < 4) {
                const updatedDice = prevState.dice.map(item => {
                    const color = item.color;
                    const oldNumber = item.number;
                    const newNumber = Math.floor(Math.random() * 6) + 1;
                    if (color === "white") {
                        return {
                            ...item,
                            number: newNumber
                        } 
                    } else if (color === "grey") {
                        return {
                            ...item,
                            number: oldNumber
                        }
                    }
                    return item   
                })
                return {
                    dice: updatedDice
                }
            } else if (rollCount === 4) {
                rollCount = 0
                return {
                    dice: diceData
                }
            }
        })
    }

    handleDiceClick(id) {
        this.setState(prevState => {
            const updatedColor = prevState.dice.map(item => {
                const white = "white"
                const grey = "grey"
                if (item.id === id) {
                    if (item.color === "white") {
                        return {
                            ...item,
                            color: grey
                        } 
                    } else if (item.color === "grey") {
                        return {
                            ...item,
                            color: white
                        }
                    }  
                }
                return item
            })
            return {
                dice: updatedColor
            }
        })
    }

    render() {
        const dieComponent = this.state.dice.map(item => <Die key={item.id} item={item} handleDiceClick={this.handleDiceClick}/>)
        return (
            <div>
                <div className="dice-box-div">
                    {dieComponent}
                </div>
                <RollButton handleDiceRoll={this.handleDiceRoll}/>
            </div>
        )
    }
}

export default DiceBox