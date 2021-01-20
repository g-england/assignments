import React from "react"

// class Square extends React.Component {
//     constructor() {
//         super();
//     }

//     render(props) {
//         return (
//             <div className="square-div" style={{backgroundColor: props.color}}>

//             </div>
//         )
//     }
// }

function Square(props) {
    return (
        <div className="square-div" style={{backgroundColor: props.color}}>

        </div>
    )
}

export default Square