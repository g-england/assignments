import React from "react"
import blogData from "./blogData"
import BlogPost from "./BlogPost"

function BlogList(){
    const blogListComponent = blogData.map(item => <BlogPost title={item.title} subTitle={item.subTitle} author={item.author} date={item.date}/>)

    return (
        [blogListComponent]
    )
}

export default BlogList