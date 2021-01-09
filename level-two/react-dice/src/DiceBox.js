import React from "react"
import Die from "./Die"
import RollButton from "./RollButton"

const initialState = {
    die1: {
        num1: 0,
        color: "white"
    },
    die2: {
        num2: 0,
        color: "white"
    },
    die3: {
        num3: 0,
        color: "white"
    },
    die4: {
        num4: 0,
        color: "white"
    },
    die5: {
        num5: 0,
        color: "white"
    }
}

class DiceBox extends React.Component {
    constructor() {
        super();
        this.handleDiceRoll = this.handleDiceRoll.bind(this);
        this.handleDiceSelect1 = this.handleDiceSelect1.bind(this);
        this.handleDiceSelect2 = this.handleDiceSelect2.bind(this);
        this.handleDiceSelect3 = this.handleDiceSelect3.bind(this);
        this.handleDiceSelect4 = this.handleDiceSelect4.bind(this);
        this.handleDiceSelect5 = this.handleDiceSelect5.bind(this);
        this.state = initialState
    }

    handleDiceRoll() {
        this.setState(prevState => {
            const numberArray = []
            for (let i = 0; i < 5; i++) {
                const newNumber = Math.floor(Math.random() * 6) + 1;
                numberArray.push(newNumber);
            }
            return {...prevState,
                die1: {
                    ...prevState.die1,
                    num1: numberArray[0]
                }, 
                die2: {
                    ...prevState.die2,
                    num2: numberArray[1]
                }, 
                die3: {
                    ...prevState.die3,
                    num3: numberArray[2]
                }, 
                die4: {
                    ...prevState.die4,
                    num4: numberArray[3]
                }, 
                die5: {
                    ...prevState.die5,
                    num5: numberArray[4]
                }
            }
        })
    }

    handleDiceSelect1() {
        this.setState(prevState => {
            if (this.state.die1.color === "white") {
                return {...prevState,
                    die1: {
                        ...prevState.die1,
                        color: "grey"
                    }, 
                    die2: {
                        ...prevState.die2,
                    }, 
                    die3: {
                        ...prevState.die3,
                    }, 
                    die4: {
                        ...prevState.die4,
                    }, 
                    die5: {
                        ...prevState.die5,
                    }
                }
            } else if (this.state.die1.color === "grey") {
                return {...prevState,
                    die1: {
                        ...prevState.die1,
                        color: "white"
                    }, 
                    die2: {
                        ...prevState.die2,
                    }, 
                    die3: {
                        ...prevState.die3,
                    }, 
                    die4: {
                        ...prevState.die4,
                    }, 
                    die5: {
                        ...prevState.die5,
                    }
                }
            }
        })
    }

    handleDiceSelect2() {
        this.setState(prevState => {
            if (this.state.die2.color === "white") {
                return {...prevState,
                    die1: {
                        ...prevState.die1,
                    }, 
                    die2: {
                        ...prevState.die2,
                        color: "grey"
                    }, 
                    die3: {
                        ...prevState.die3,
                    }, 
                    die4: {
                        ...prevState.die4,
                    }, 
                    die5: {
                        ...prevState.die5,
                    }
                }
            } else if (this.state.die2.color === "grey") {
                return {...prevState,
                    die1: {
                        ...prevState.die1,
                    }, 
                    die2: {
                        ...prevState.die2,
                        color: "white"
                    }, 
                    die3: {
                        ...prevState.die3,
                    }, 
                    die4: {
                        ...prevState.die4,
                    }, 
                    die5: {
                        ...prevState.die5,
                    }
                }
            }
        })
    }

    handleDiceSelect3() {
        this.setState(prevState => {
            if (this.state.die3.color === "white") {
                return {...prevState,
                    die1: {
                        ...prevState.die1,
                    }, 
                    die2: {
                        ...prevState.die2,
                    }, 
                    die3: {
                        ...prevState.die3,
                        color: "grey"
                    }, 
                    die4: {
                        ...prevState.die4,
                    }, 
                    die5: {
                        ...prevState.die5,
                    }
                }
            } else if (this.state.die3.color === "grey") {
                return {...prevState,
                    die1: {
                        ...prevState.die1,
                    }, 
                    die2: {
                        ...prevState.die2,
                    }, 
                    die3: {
                        ...prevState.die3,
                        color: "white"
                    }, 
                    die4: {
                        ...prevState.die4,
                    }, 
                    die5: {
                        ...prevState.die5,
                    }
                }
            }
        })
    }

    handleDiceSelect4() {
        this.setState(prevState => {
            if (this.state.die4.color === "white") {
                return {...prevState,
                    die1: {
                        ...prevState.die1,
                    }, 
                    die2: {
                        ...prevState.die2,
                    }, 
                    die3: {
                        ...prevState.die3,
                    }, 
                    die4: {
                        ...prevState.die4,
                        color: "grey"
                    }, 
                    die5: {
                        ...prevState.die5,
                    }
                }
            } else if (this.state.die4.color === "grey") {
                return {...prevState,
                    die1: {
                        ...prevState.die1,
                    }, 
                    die2: {
                        ...prevState.die2,
                    }, 
                    die3: {
                        ...prevState.die3,
                    }, 
                    die4: {
                        ...prevState.die4,
                        color: "white"
                    }, 
                    die5: {
                        ...prevState.die5,
                    }
                }
            }
        })
    }

    handleDiceSelect5() {
        this.setState(prevState => {
            if (this.state.die5.color === "white") {
                return {...prevState,
                    die1: {
                        ...prevState.die1,
                    }, 
                    die2: {
                        ...prevState.die2,
                    }, 
                    die3: {
                        ...prevState.die3,
                    }, 
                    die4: {
                        ...prevState.die4,
                    }, 
                    die5: {
                        ...prevState.die5,
                        color: "grey"
                    }
                }
            } else if (this.state.die5.color === "grey") {
                return {...prevState,
                    die1: {
                        ...prevState.die1,
                    }, 
                    die2: {
                        ...prevState.die2,
                    }, 
                    die3: {
                        ...prevState.die3,
                    }, 
                    die4: {
                        ...prevState.die4,
                    }, 
                    die5: {
                        ...prevState.die5,
                        color: "white"
                    }
                }
            }
        })
    }

    render() {

        return (
            <div>
                <div className="dice-box-div">
                    <Die number={this.state.die1.num1} color={this.state.die1.color} onClick={this.handleDiceSelect1}/>
                    <Die number={this.state.die2.num2} color={this.state.die2.color} onClick={this.handleDiceSelect2}/>
                    <Die number={this.state.die3.num3} color={this.state.die3.color} onClick={this.handleDiceSelect3}/>
                    <Die number={this.state.die4.num4} color={this.state.die4.color} onClick={this.handleDiceSelect4}/>
                    <Die number={this.state.die5.num5} color={this.state.die5.color} onClick={this.handleDiceSelect5}/>
                </div>
                <RollButton onClick={this.handleDiceRoll}/>
            </div>
        )
    }
}

export default DiceBox