import React from 'react'

const ImageItem = ({image}) => {
    console.log(image);
  return (
    <div>
      <img className='image' src={image.urls.small} alt="" />
    </div>
  )
}

export default ImageItem
