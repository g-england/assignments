import React from "react"

function BlogPost(props){
    return (
        <div className="blog-post">
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <p>Posted by {props.author} on {props.date}</p>
            <hr style={{color: "lightGrey"}}/>
        </div>
    )
}

export default BlogPost