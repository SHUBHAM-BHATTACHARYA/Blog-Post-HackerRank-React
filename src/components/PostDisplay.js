import React, { useState } from "react";

function PostDisplay(props) {
  const [blogData, setBlogData] = useState(props.blogData)
  //console.log(blogData)
  const handleDelete = (id) =>{
    //console.log(id)
    props.setDeleteId(id)
  }
  return (
    <>
      {blogData.map((blog)=>{
        return(
          <div className="post-box" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button onClick={()=>handleDelete(blog.id)}>Delete</button>
          </div>
        )
      })
    }
    </>
  );
}

export default PostDisplay;
