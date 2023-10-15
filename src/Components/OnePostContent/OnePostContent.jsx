import React from 'react'

export const OnePostContent = (props) => {
    const postData=props.postData
  return (
    <div key={postData.id}>
     <h1>{postData.title} </h1>
     
    </div>
  )
}
