import React from 'react'
import './image-frame.css'

const ImageFrame = (props) => {
console.log(props.imgPath);
  return (
    <div className='image'>
    <img src={props.imgPath} width="100px" height="100px"></img>
    </div>
  )
}

export default ImageFrame
