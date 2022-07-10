import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({post}) => {
  return (
    <div className="card">
     <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
     </div>
    </div>
  )
}