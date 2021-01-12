import React from "react"

function Form(props) {
    return (
        
            <form onSubmit={props.handleSubmit} className="form-div-wrapper" autoComplete="off">
                <div className="form-div-one">
                    <input onChange={props.handleChange} className="input1" placeholder="First Name" name="firstName" value={props.info.firstName} type="text"/>
                    <input onChange={props.handleChange} className="input2" placeholder="Last Name" name="lastName" value={props.info.lastName} type="text"/>
                    
                    <input onChange={props.handleChange} className="input3" placeholder="Email" name="email" value={props.info.email} type="text"/>
                    <input onChange={props.handleChange} className="input4" placeholder="Place of Birth" name="placeOfBirth" value={props.info.placeOfBirth} type="text"/>
                    
                    <input onChange={props.handleChange} className="input5" placeholder="Phone" name="phone" value={props.info.phone} type="text"/>
                    <input onChange={props.handleChange} className="input6" placeholder="Favorite Food" name="favoriteFood" value={props.info.favoriteFood} type="text"/>
                </div>
            
                <div className="form-div-two">
                    <textarea onChange={props.handleChange} className="text-area" placeholder="Tell us about yourself" name="about" value={props.info.about}/>
                </div>

                <div className="form-div-three">
                    <button>Submit</button>
                </div>
            </form>
        
    )
}

export default Form