import React from 'react'
import './iskustva.css'
import ImageFrame from './image-frame'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'

const Iskustva = () => {
  return (
    <div>
        <ImageFrame imgPath={image1} />
        <ImageFrame imgPath={image2} />
    </div>
  )
}

export default Iskustva