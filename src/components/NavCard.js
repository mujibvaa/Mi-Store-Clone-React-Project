import React from 'react'
import "../styling/NavCard.css"

const NavCard = ({name,price,image}) => {
  return (
    <div className='NavCard'>

        <img src={image} />
        <p>{name}</p>
        <span>{price}</span>
        
    </div>
  )
}

export default NavCard